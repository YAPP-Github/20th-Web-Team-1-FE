import React from 'react';
import * as S from './TreeItemAdd.styled';
import { TreeItemAddType } from './type';

const TreeItemAddView = ({ onOpenForm }: TreeItemAddType) => {
	return (
		<S.ItemAddWrapper onClick={onOpenForm}>
			<div className="plus-shape-container">
				<span className="plus-shape-bar row" />
				<span className="plus-shape-bar column" />
			</div>
		</S.ItemAddWrapper>
	);
};

export default TreeItemAddView;
