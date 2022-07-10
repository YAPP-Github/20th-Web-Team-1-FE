import React from 'react';
import * as S from './TreeItem.styled';
import { Link } from 'react-router-dom';
import { TreeShapeContainer } from '@/components/features/Trees/TreeAddForm/TreeAddForm.styled';
import { Props } from './TreeItem.type';

const TreeItem = ({ name }: Props) => {
	return (
		<S.ItemWrapper>
			<Link to={name}>
				<TreeShapeContainer size="small">
					<div className="tree-shape-top" />
					<div className="tree-shape-bottom" />
				</TreeShapeContainer>
				<span>{name}</span>
			</Link>
		</S.ItemWrapper>
	);
};

export default TreeItem;
