import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Forest.styled';
import MessageChip from '@/components/shared/Chip/MessageChip';
import Button from '@/components/shared/Button';
import TreeList from '@/components/features/Forest/TreeList';

const trees = [
	{
		id: 1,
		fruit: 'APPLE',
		name: 'TEAM. 위영민',
	},
	{
		id: 2,
		fruit: 'GRAPE',
		name: 'TEAM. 최영광',
	},
	{
		id: 3,
		fruit: 'LEMON',
		name: 'TEAM. 최수임',
	},
	// {
	// 	id: 4,
	// 	fruit: 'STRAWBERRY',
	// 	name: 'TEAM. 황재원',
	// },
	// {
	// 	id: 5,
	// 	fruit: 'BLUEBERRY',
	// 	name: 'TEAM. 강지수',
	// },
	// {
	// 	id: 6,
	// 	fruit: 'ORANGE',
	// 	name: 'TEAM. 김수빈',
	// },
];

const Forest = () => {
	const navigate = useNavigate();

	return (
		<S.TreesContainer>
			<MessageChip message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

			<S.TreeListBox>
				<TreeList trees={trees} />
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
