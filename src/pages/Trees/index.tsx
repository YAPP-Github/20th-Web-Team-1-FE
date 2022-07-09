import React from 'react';
import * as S from './Trees.styled';
import MessageChipView from '@/components/shared/Chip/MessageChip/MessageChipView';
import ButtonView from '@/components/shared/Button/ButtonView';
import TreeList from '@/components/features/Trees/TreeList';

const Trees = () => {
	return (
		<S.TreesContainer>
			<MessageChipView message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

			<S.TreeListBox>
				<TreeList />
			</S.TreeListBox>

			<S.ButtonBox>
				<ButtonView
					type="button"
					bgColor="primary"
					onClick={() => {
						console.log('물 주러 가기');
					}}
				>
					나무에 물 주기
				</ButtonView>
			</S.ButtonBox>
		</S.TreesContainer>
	);
};

export default Trees;
