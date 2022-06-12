import React from 'react';
import MessageChipView from '@/components/shared/Chip/MessageChip/MessageChipView';
import ButtonView from '@/components/shared/Button/ButtonView';
import TreeListView from '@/components/features/Trees/TreeList/TreeListView';
import * as S from './Trees.styled';
import { TreesType } from './type';
import TreeAddForm from '@/components/features/Trees/TreeAddForm';

const TreesView = ({ isAddingTree, onCloseForm, onOpenForm }: TreesType) => {
	return (
		<main>
			{isAddingTree ? (
				<TreeAddForm onCloseForm={onCloseForm} />
			) : (
				<>
					<S.MessageChipBox>
						<MessageChipView message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />
					</S.MessageChipBox>

					<S.TreeListBox>
						<TreeListView onOpenForm={onOpenForm} />
					</S.TreeListBox>

					<S.ButtonBox>
						<ButtonView type="button" bgColor="primary">
							나무에 물 주기
						</ButtonView>
					</S.ButtonBox>
				</>
			)}
		</main>
	);
};

export default TreesView;
