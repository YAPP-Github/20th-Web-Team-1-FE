import React from 'react';
import MessageChipView from '@/components/shared/MessageChip/MessageChipView';
import ButtonView from '@/components/shared/Button/ButtonView';
import * as S from './Trees.styled';
import TreeListView from './../../components/features/Trees/TreeList/TreeListView';

const TreesView = () => {
	return (
		<main>
			<S.MessageChipBox>
				<MessageChipView message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />
			</S.MessageChipBox>

			<S.TreeListBox>
				<TreeListView />
			</S.TreeListBox>

			<S.ButtonBox>
				<ButtonView type="button" bgColor="primary">
					나무에 물 주기
				</ButtonView>
			</S.ButtonBox>
		</main>
	);
};

export default TreesView;
