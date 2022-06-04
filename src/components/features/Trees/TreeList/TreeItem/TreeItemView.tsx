import React from 'react';
import * as S from './TreeItem.styled';
import { TreeItemType } from './type';

const TreeItemView = ({ name }: TreeItemType) => {
	return (
		<S.ItemWrapper>
			<S.TreeItemPreview></S.TreeItemPreview>
			<S.TreeItemName>{name}</S.TreeItemName>
		</S.ItemWrapper>
	);
};

export default TreeItemView;
