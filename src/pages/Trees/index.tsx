import React from 'react';
import * as S from './Trees.styled';
import MessageChip from '@/components/shared/Chip/MessageChip';
import Button from '@/components/shared/Button/Button';
import TreeList from '@/components/features/Trees/TreeList';

const Trees = () => {
	return (
		<S.TreesContainer>
			<MessageChip message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

			<S.TreeListBox>
				<TreeList />
			</S.TreeListBox>

			<S.ButtonBox>
				<Button
					type="button"
					bgColor="primary"
					onClick={() => {
						console.log('물 주러 가기');
					}}
				>
					나무에 물 주기
				</Button>
			</S.ButtonBox>
		</S.TreesContainer>
	);
};

export default Trees;
