import React from 'react';
import * as S from './TreeItemAdd.styled';
import { TreeItemAddType } from './type';

const TreeItemAddView = ({ size, onOpenForm }: TreeItemAddType) => {
	return (
		<S.ItemAddWrapper size={size || 'small'} onClick={onOpenForm}>
			<span>+</span>
		</S.ItemAddWrapper>
	);
};

export default TreeItemAddView;
