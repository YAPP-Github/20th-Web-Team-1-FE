import React from 'react';
import TreeItemAddView from './TreeItemAdd/TreeItemAddView';
import TreeItemView from './TreeItem/TreeItemView';
import * as S from './TreeList.styled';
import { TreeListViewType } from './type';

const TreeListView = ({ handleTreeEditItemClick }: TreeListViewType) => {
	return (
		<S.TreeItemList>
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemAddView onClick={handleTreeEditItemClick} />
		</S.TreeItemList>
	);
};

export default TreeListView;
