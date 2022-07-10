import React from 'react';
import { useNavigate } from 'react-router-dom';
import TreeItem from './TreeItem';
import TreeItemAdd from './TreeItemAdd';
import * as S from './TreeList.styled';

const TreeList = () => {
	const navigate = useNavigate();

	const onClickTreeEditItem = () => {
		navigate('/trees/edit');
	};

	return (
		<S.TreeItemList>
			<TreeItem name={'Yapp Web 1팀'} />
			<TreeItem name={'Yapp Web 1팀'} />
			<TreeItem name={'Yapp Web 1팀'} />
			<TreeItemAdd onClick={onClickTreeEditItem} />
		</S.TreeItemList>
	);
};

export default TreeList;
