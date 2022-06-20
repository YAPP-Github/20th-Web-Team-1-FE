import React from 'react';
import { useNavigate } from 'react-router-dom';
import TreeListView from './TreeListView';

const TreeList = () => {
	const navigate = useNavigate();

	const onClickTreeEditItem = () => {
		navigate('/trees/edit');
	};

	return <TreeListView handleTreeEditItemClick={onClickTreeEditItem} />;
};

export default TreeList;
