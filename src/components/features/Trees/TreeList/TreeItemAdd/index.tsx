import React from 'react';
import * as S from './TreeItemAdd.styled';

const TreeItemAdd = () => {
	return (
		<S.ItemAddContainer>
			<S.ItemAddBtn to={'/forest/edit'}>
				<div>
					<span />
					<span />
				</div>
			</S.ItemAddBtn>
		</S.ItemAddContainer>
	);
};

export default TreeItemAdd;
