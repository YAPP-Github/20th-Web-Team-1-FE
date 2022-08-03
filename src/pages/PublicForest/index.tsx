import { getForest } from '@/apis/forest';
import TreeList from '@/components/features/Forest/TreeList';
import { Header, Layout } from '@/components/layout';
import Button from '@/components/shared/Button';
import MessageChip from '@/components/shared/Chip/MessageChip';
import { Folder, ForestTrees } from '@/types/forest';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '../../stores/user';
import * as S from './Forest.styled';
import SadBeeImg from '@/assets/images/mypage/logout_bee_img@2x.png';

const PublicForest = () => {
	const navigate = useNavigate();

	const myInfo = useRecoilValue(myInfoState);

	const { userId: currentForestUserId } = useParams();

	const [treeFolders, setTreeFolders] = useState<Folder[] | undefined>(undefined);
	const [treeOwner, setTreeOwner] = useState('');

	const { data: folders } = useQuery<ForestTrees | undefined>(
		['getForest', currentForestUserId],
		() => getForest(currentForestUserId),
		{
			enabled: !!currentForestUserId,
			retry: 0,
			onError: () => {
				navigate('not-found');
			},
		},
	);

	useEffect(() => {
		if (folders) {
			setTreeFolders(folders.responseDtoList);
			setTreeOwner(folders.nickname);
		}
	}, [folders]);

	useEffect(() => {
		if (!currentForestUserId) {
			navigate('/forest');
		}
	}, []);

	return (
		<Layout path={myInfo ? 'private' : 'public'}>
			<>
				{!myInfo && <Header />}
				<S.TreesContainer>
					<MessageChip message={`오늘 하루도 고생한 ${treeOwner}님에게 따듯한 칭찬을 남겨보세요!`} />

					<S.TreeListBox>
						<TreeList trees={treeFolders} />

						{!myInfo && treeFolders && treeFolders?.length <= 0 && (
							<S.EmptyTreeListBox>
								<S.EmptyTreeListMessageImg src={SadBeeImg} alt="빈 나무 숲 알림" />
								<S.EmptyTreeListMessage>{treeOwner} 님이 새로 만든 나무가 존재하지 않습니다.</S.EmptyTreeListMessage>
								<S.EmptyTreeListMessage>나무에 물 주기를 눌러서 칭찬을 남겨보세요 !</S.EmptyTreeListMessage>
							</S.EmptyTreeListBox>
						)}
					</S.TreeListBox>

					<S.ButtonBox>
						<Button
							type="button"
							bgColor="primary"
							onClick={() => navigate(`/message/edit/${currentForestUserId}/${treeOwner}`)}
						>
							나무에 물 주기
						</Button>
					</S.ButtonBox>
				</S.TreesContainer>
			</>
		</Layout>
	);
};

export default PublicForest;
