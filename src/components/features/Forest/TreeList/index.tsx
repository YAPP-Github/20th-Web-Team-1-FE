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
	const { userId: currentforestUserId } = useParams();

	const checkTreeSizeMax = () => trees && trees?.length < TREE_SIZE_MAX;
	const isVisitedMyForest = () => Number(currentforestUserId) === myInfo?.id;

	return (
		<S.TreeItemList>
			{trees?.map((tree) => {
				return <TreeItem key={tree.id} tree={tree} />;
			})}
			{!currentforestUserId ? checkTreeSizeMax() && <TreeItemAdd /> : isVisitedMyForest() && <TreeItemAdd />}
		</S.TreeItemList>
	);
};

export default TreeList;
