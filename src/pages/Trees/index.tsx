import React, { useState } from 'react';
import TreesView from './TreesView';

const Trees = () => {
	const [isAddingTree, setIsAddingTree] = useState<boolean>(false);

	const handleCloseForm = () => {
		setIsAddingTree(false);
	};

	const handleOpenForm = () => {
		setIsAddingTree(true);
	};

	return <TreesView isAddingTree={isAddingTree} onCloseForm={handleCloseForm} onOpenForm={handleOpenForm} />;
};

export default Trees;
