import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as S from './Forest.styled';
import MessageChip from '@/components/shared/Chip/MessageChip';
import Button from '@/components/shared/Button';
import TreeList from '@/components/features/Forest/TreeList';
import { Folder } from '@/types/forest';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '../../stores/user';
import { getForest } from '@/apis/forest';

const Forest = () => {
	const navigate = useNavigate();

	const myInfo = useRecoilValue(myInfoState);
	const userId = myInfo?.id;

	const { data: folders } = useQuery<Folder[] | undefined>(['getForest', userId], () => getForest(userId), {
		refetchOnWindowFocus: false,
	});

	return (
		<S.TreesContainer>
			<MessageChip message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

			<S.TreeListBox>
				<TreeList trees={folders} />
			</S.TreeListBox>

			<S.ButtonBox>
				<Button type="button" bgColor="primary" onClick={() => navigate('/message/edit')}>
					나무에 물 주기
				</Button>
			</S.ButtonBox>
		</S.TreesContainer>
	);
};

export default Forest;
