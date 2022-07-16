import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as S from './MessageMenu.styled';
import { MessageMenuProps } from './MessageMenu.type';
import { readUserForest } from '@/apis/forest';
import { myInfoState } from '@/stores/user';
import { Folder } from '@/types/forest';
import HamburgerIcon from '@/assets/images/shared/hamburger.svg';

const MessageMenu = ({
	isEdit,
	editMakingToggleHandler,
	onToggleOpenDrawer,
	deleteMessages,
	onToggleMovingFolderModal,
}: MessageMenuProps) => {
	const myInfo = useRecoilValue(myInfoState);

	const { treeId } = useParams();

	const { data: folders } = useQuery<Folder[] | undefined>('readUserForest', () => readUserForest(myInfo?.id), {
		enabled: !!myInfo,
	});

	const [currentTree, setCurrentTree] = useState<Folder | undefined>(undefined);

	useEffect(() => {
		if (folders && treeId) {
			const idx = folders.findIndex((folder) => folder.id === Number(treeId));
			setCurrentTree(folders[idx]);
		}
	}, [folders, treeId]);

	return (
		<S.MenuContainer>
			<S.InnerWrapper>
				<S.HamburgerButton onClick={onToggleOpenDrawer}>
					<img src={HamburgerIcon} alt="message-box-hamburger-button" />
				</S.HamburgerButton>
				{treeId ? <S.Title>{currentTree && currentTree.name}</S.Title> : <S.Title>나에게 온 편지</S.Title>}
			</S.InnerWrapper>

			<S.InnerWrapper>
				{isEdit && (
					<>
						<S.MenuButton onClick={deleteMessages}>삭제하기</S.MenuButton>
						<S.MenuButton onClick={onToggleMovingFolderModal}>이동하기</S.MenuButton>
					</>
				)}

				{!isEdit && editMakingToggleHandler && (
					<>
						<S.MenuButton onClick={() => editMakingToggleHandler('edit')}>편집하기</S.MenuButton>
						{treeId && <S.MenuButton onClick={() => editMakingToggleHandler('making')}>열매맺기</S.MenuButton>}
					</>
				)}
			</S.InnerWrapper>
		</S.MenuContainer>
	);
};

export default MessageMenu;
