import React from 'react';
import TreeItemAddView from './TreeItemAdd/TreeItemAddView';
import TreeItemView from './TreeItem/TreeItemView';
import * as S from './TreeList.styled';
import { TreeListType } from './type';

const TreeListView = ({ onOpenForm }: TreeListType) => {
	return (
		<S.TreeItemList>
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemAddView onOpenForm={onOpenForm} />
		</S.TreeItemList>
	);
};

export default TreeListView;
