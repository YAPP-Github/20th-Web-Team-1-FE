import React from 'react';
import TreeItem from './TreeItem';
import TreeItemAdd from './TreeItemAdd';
import * as S from './TreeList.styled';

const TreeList = () => {
	return (
		<S.TreeItemList>
			<TreeItem name={'Yapp Web 1팀'} />
			<TreeItem name={'Yapp Web 1팀'} />
			<TreeItem name={'Yapp Web 1팀'} />
			<TreeItemAdd />
		</S.TreeItemList>
	);
};

export default TreeList;
