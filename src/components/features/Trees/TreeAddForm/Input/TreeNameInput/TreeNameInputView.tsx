import React from 'react';
import * as S from './TreeNameInput.styled';
import { TreeNameInputViewType } from './type';

const TreeNameInputView = ({ treeName, placeholder, autoFocus, onChange }: TreeNameInputViewType) => {
	return (
		<S.TreeNameInput type="text" value={treeName} placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} />
	);
};

export default TreeNameInputView;
