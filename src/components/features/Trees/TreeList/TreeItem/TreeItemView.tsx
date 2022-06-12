import React from 'react';
import * as S from './TreeItem.styled';
import { TreeShapeContainer } from '@/components/features/Trees/TreeAddForm/TreeAddForm.styled';
import { TreeItemViewType } from './type';

const TreeItemView = ({ name }: TreeItemViewType) => {
	return (
		<S.ItemWrapper>
			<TreeShapeContainer size="small">
				<div className="tree-shape-top" />
				<div className="tree-shape-bottom" />
			</TreeShapeContainer>
			<span className="item-name">{name}</span>
		</S.ItemWrapper>
	);
};

export default TreeItemView;
