import { getForest } from '@/apis/forest';
import TreeList from '@/components/features/Forest/TreeList';
import { Header, Layout } from '@/components/layout';
import Button from '@/components/shared/Button';
import MessageChip from '@/components/shared/Chip/MessageChip';
import { Folder } from '@/types/forest';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '../../stores/user';
import * as S from './Forest.styled';

const PublicForest = () => {
	const navigate = useNavigate();

	const myInfo = useRecoilValue(myInfoState);

	const { userId } = useParams();

	const { data: folders } = useQuery<Folder[] | undefined>(['getForest', userId], () => getForest(userId), {
		enabled: !!userId,
	});

	useEffect(() => {
		if (!userId) {
			navigate('/forest');
		}
	}, []);

	return (
		<Layout path={myInfo ? 'private' : 'public'}>
			<>
				{!myInfo && <Header />}
				<S.TreesContainer>
					<MessageChip message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

					<S.TreeListBox>{folders && <TreeList trees={folders} />}</S.TreeListBox>

					<S.ButtonBox>
						<Button type="button" bgColor="primary" onClick={() => navigate('/message/edit')}>
							나무에 물 주기
						</Button>
					</S.ButtonBox>
				</S.TreesContainer>
			</>
		</Layout>
	);
};

export default PublicForest;
