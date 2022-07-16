import React from 'react';
import TreeItem from './TreeItem';
import TreeItemAdd from './TreeItemAdd';
import * as S from './TreeList.styled';
import { TREE_SIZE_MAX } from '@/constants/forest';
import { Props } from './TreeList.type';

const TreeList = ({ trees }: Props) => {
	const checkTreeSizeMax = () => trees && trees?.length < TREE_SIZE_MAX;

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
