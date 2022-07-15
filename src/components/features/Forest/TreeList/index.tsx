import React from 'react';
import TreeItem from './TreeItem';
import TreeItemAdd from './TreeItemAdd';
import * as S from './TreeList.styled';
import { MAX_TREE_SIZE } from '@/constants/forest';
import { Props } from './TreeList.type';

const TreeList = ({ trees }: Props) => {
	const checkTreeSizeMax = () => trees && trees?.length < MAX_TREE_SIZE;

	return (
		<S.TreeItemList>
			{trees?.map((tree) => {
				return <TreeItem key={tree.id} tree={tree} />;
			})}
			{checkTreeSizeMax() && <TreeItemAdd />}
		</S.TreeItemList>
	);
};

export default TreeList;
