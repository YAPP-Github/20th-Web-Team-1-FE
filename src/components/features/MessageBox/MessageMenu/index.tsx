import HamburgerIcon from '@/assets/images/shared/hamburger.svg';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './MessageMenu.styled';
import { MessageMenuProps } from './MessageMenu.type';

const MessageMenu = ({
	isEdit,
	editMakingToggleHandler,
	onToggleOpenDrawer,
	deleteMessages,
	onToggleMovingFolderModal,
	treeName,
}: MessageMenuProps) => {
	const { treeId } = useParams();

	const currentTree =
		!treeId || treeId === 'DEFAULT' ? '나에게 온 메세지함' : treeId === 'favorite' ? '즐겨찾기' : treeName;

	return (
		<S.MenuContainer>
			<S.InnerWrapper>
				<S.HamburgerButton onClick={onToggleOpenDrawer}>
					<img src={HamburgerIcon} alt="message-box-hamburger-button" />
				</S.HamburgerButton>
				<S.Title>{currentTree && currentTree}</S.Title>
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
						{treeId && treeId !== 'favorite' && (
							<S.MenuButton onClick={() => editMakingToggleHandler('making')}>열매맺기</S.MenuButton>
						)}
					</>
				)}
			</S.InnerWrapper>
		</S.MenuContainer>
	);
};

export default MessageMenu;
