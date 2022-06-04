import React from 'react';
import TreeItemAddView from './TreeItemAdd/TreeItemAddView';
import TreeItemView from './TreeItem/TreeItemView';
import * as S from './TreeList.styled';

const TreeListView = () => {
	return (
		<S.TreeItemList>
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemView name={'Yapp Web 1팀'} />
			<TreeItemAddView />
		</S.TreeItemList>
	);
};

export default TreeListView;
