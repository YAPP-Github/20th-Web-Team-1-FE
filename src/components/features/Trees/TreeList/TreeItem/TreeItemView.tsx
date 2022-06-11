import React from 'react';
import * as S from './TreeItem.styled';
import { TreeItemType } from './type';

const TreeItemView = ({ name, size }: TreeItemType) => {
	return (
		<S.ItemWrapper size={size || 'small'}>
			<div></div>
			<span className="item-name">{name}</span>
		</S.ItemWrapper>
	);
};

export default TreeItemView;
