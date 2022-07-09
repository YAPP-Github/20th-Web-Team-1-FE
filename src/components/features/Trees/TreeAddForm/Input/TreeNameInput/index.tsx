import React from 'react';
import * as S from './TreeNameInput.styled';
import { Props } from './TreeNameInput.type';

const TreeNameInput = ({ treeName, placeholder, autoFocus, onChangeTreeName }: Props) => {
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const treeName = event.currentTarget.value;
		onChangeTreeName(treeName);
	};

	return (
		<S.TreeNameInput type="text" value={treeName} placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} />
	);
};

export default TreeNameInput;
