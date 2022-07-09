import React from 'react';
import * as S from './TreeItemAdd.styled';
import { Props } from './TreeItemAdd.type';

const TreeItemAdd = ({ onClick }: Props) => {
	return (
		<S.ItemAddWrapper type="button" onClick={onClick}>
			<div className="plus-shape-container">
				<span className="plus-shape-bar row" />
				<span className="plus-shape-bar column" />
			</div>
		</S.ItemAddWrapper>
	);
};

export default TreeItemAdd;
