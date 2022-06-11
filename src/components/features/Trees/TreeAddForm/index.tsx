import React, { useState } from 'react';
import TreeAddFormView from './TreeAddFormView';
import { TreeAddFormType } from './type';

const TreeAddForm = ({ onCloseForm }: TreeAddFormType) => {
	const [selectedFruit, setSelectedFruit] = useState('');

	const handleChangeSelectedFruit = (fruit: string) => {
		setSelectedFruit(fruit);
	};

	return (
		<TreeAddFormView
			onCloseForm={onCloseForm}
			selectedFruit={selectedFruit}
			onChangeSelectedFruit={handleChangeSelectedFruit}
		/>
	);
};

export default TreeAddForm;
