import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TreeAddFormView from './TreeAddFormView';

const TreeAddForm = () => {
	const navigate = useNavigate();
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

	const handleGoBackClick = () => {
		navigate(-1);
	};

	return (
		<TreeAddFormView
			treeName={treeName}
			selectedFruit={selectedFruit}
			onChangeTreeName={handleChangeTreeName}
			onChangeSelectedFruit={handleChangeSelectedFruit}
			onSubmitEditedTreeInfo={handleSubmitEditedTreeInfo}
			onGoBackClick={handleGoBackClick}
		/>
	);
};

export default TreeAddForm;
