import React from 'react';
import TreeNameInputView from './TreeNameInputView';
import { TreeNameInputModelType } from './type';

const TreeNameInput = ({ treeName, placeholder, autoFocus, onChangeTreeName }: TreeNameInputModelType) => {
	const onChange = (event: React.FormEvent<HTMLFormElement>) => {
		const treeName = event.currentTarget.value;
		onChangeTreeName(treeName);
	};

	return <TreeNameInputView treeName={treeName} placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} />;
};

export default TreeNameInput;
