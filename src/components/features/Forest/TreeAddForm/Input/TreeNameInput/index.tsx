import React from 'react';
import * as S from './TreeNameInput.styled';
import { Props } from './TreeNameInput.type';
import { TREE_NAME_LENGTH_MIN, TREE_NAME_LENGTH_MAX } from '@/constants/forest';

const TreeNameInput = ({ treeName, placeholder, onChangeTreeName }: Props) => {
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const treeName = event.currentTarget.value;
		onChangeTreeName(treeName);
	};

	return (
		<S.TreeNameInput
			type="text"
			value={treeName}
			placeholder={placeholder}
			onChange={onChange}
			minLength={TREE_NAME_LENGTH_MIN}
			maxLength={TREE_NAME_LENGTH_MAX}
		/>
	);
};

export default TreeNameInput;
