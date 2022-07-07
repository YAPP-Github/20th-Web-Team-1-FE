import React from 'react';
import TreeFolderItemView from './TreeFolderItemView';

const TreeFolderItem = ({ path }: { path: string }) => {
	return <TreeFolderItemView path={path} />;
};

export default TreeFolderItem;
