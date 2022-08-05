import React from 'react';
import TreeItem from './TreeItem';
import TreeItemAdd from './TreeItemAdd';
import * as S from './TreeList.styled';
import { TREE_SIZE_MAX } from '@/constants/forest';
import { Props } from './TreeList.type';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';

const TreeList = ({ trees }: Props) => {
	const myInfo = useRecoilValue(myInfoState);
	const { userId: currentForestUserId } = useParams();

	const checkTreeSizeMax = () => trees && trees?.length < TREE_SIZE_MAX;

	return (
		<S.TreeItemList>
			{trees?.map((tree) => {
				return <TreeItem key={tree.id} tree={tree} />;
			})}
			{myInfo &&
				(Number(currentForestUserId) === myInfo?.id || currentForestUserId === undefined) &&
				checkTreeSizeMax() && <TreeItemAdd />}
		</S.TreeItemList>
	);
};

export default TreeList;
