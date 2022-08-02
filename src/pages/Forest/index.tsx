import { getForest } from '@/apis/forest';
import TreeList from '@/components/features/Forest/TreeList';
import { Layout } from '@/components/layout';
import Button from '@/components/shared/Button';
import MessageChip from '@/components/shared/Chip/MessageChip';
import { Folder, ForestTrees } from '@/types/forest';
import withAuth from '@/utils/HOC/withAuth';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '../../stores/user';
import * as S from './Forest.styled';

const Forest = () => {
	const navigate = useNavigate();

	const myInfo = useRecoilValue(myInfoState);

	const [treeFolders, setTreeFolders] = useState<Folder[] | undefined>(undefined);

	const { data: folders } = useQuery<ForestTrees | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		enabled: !!myInfo,
	});

	useEffect(() => {
		folders && setTreeFolders(folders.responseDtoList);
	}, [folders]);

	return (
		<Layout path="private">
			<S.TreesContainer>
				<MessageChip message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

				<S.TreeListBox>{folders && <TreeList trees={treeFolders} />}</S.TreeListBox>

				<S.ButtonBox>
					<Button type="button" bgColor="primary" onClick={() => navigate('/message/edit')}>
						나무에 물 주기
					</Button>
				</S.ButtonBox>
			</S.TreesContainer>
		</Layout>
	);
};

export default withAuth(Forest);
