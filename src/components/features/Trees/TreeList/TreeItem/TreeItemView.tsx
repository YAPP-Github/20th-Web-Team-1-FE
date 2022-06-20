import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './TreeItem.styled';
import { TreeShapeContainer } from '@/components/features/Trees/TreeAddForm/TreeAddForm.styled';
import { TreeItemViewType } from './type';

const TreeItemView = ({ name }: TreeItemViewType) => {
	return (
		<S.ItemWrapper>
			<Link to={name}>
				<TreeShapeContainer size="small">
					<div className="tree-shape-top" />
					<div className="tree-shape-bottom" />
				</TreeShapeContainer>
				<span className="item-name">{name}</span>
			</Link>
		</S.ItemWrapper>
	);
};

export default TreeItemView;
