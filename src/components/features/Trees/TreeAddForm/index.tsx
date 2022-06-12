import React, { useState } from 'react';
import TreeAddFormView from './TreeAddFormView';
import { TreeAddFormType } from './type';

const TreeAddForm = ({ onCloseForm }: TreeAddFormType) => {
	const [selectedFruit, setSelectedFruit] = useState('');
	const [treeName, setTreeName] = useState('');

	const handleChangeSelectedFruit = (fruit: string) => {
		setSelectedFruit(fruit);
	};

	const handleChangeTreeName = (treeName: string) => {
		setTreeName(treeName);
	};

	const handleSubmitEditedTreeInfo = (event: React.FormEvent) => {
		event.preventDefault();

		console.log(treeName, selectedFruit);
	};

	return (
		<TreeAddFormView
			treeName={treeName}
			selectedFruit={selectedFruit}
			onChangeTreeName={handleChangeTreeName}
			onChangeSelectedFruit={handleChangeSelectedFruit}
			onSubmitEditedTreeInfo={handleSubmitEditedTreeInfo}
			onCloseForm={onCloseForm}
		/>
	);
};

export default TreeAddForm;
