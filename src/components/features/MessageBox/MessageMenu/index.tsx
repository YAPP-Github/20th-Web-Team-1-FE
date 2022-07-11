import React from 'react';
import * as S from './MessageMenu.styled';
import HamburgerIcon from '@/assets/images/shared/hamburger.svg';
import { MessageMenuProps } from './MessageMenu.type';

const MessageMenu = ({
	isEdit,
	setIsEdit,
	onToggleOpenDrawer,
	deleteMessages,
	onToggleMovingFolderModal,
}: MessageMenuProps) => {
	return (
		<S.MenuContainer>
			<S.InnerWrapper>
				<S.HamburgerButton onClick={onToggleOpenDrawer}>
					<img src={HamburgerIcon} alt="message-box-hamburger-button" />
				</S.HamburgerButton>
				<S.Title>나에게 온 메세지</S.Title>
			</S.InnerWrapper>

			<S.InnerWrapper>
				{isEdit ? (
					<>
						<S.MenuButton onClick={deleteMessages}>삭제하기</S.MenuButton>
						<S.MenuButton onClick={onToggleMovingFolderModal}>이동하기</S.MenuButton>
					</>
				) : (
					<>
						<S.MenuButton onClick={() => setIsEdit(true)}>편집하기</S.MenuButton>
						<S.MenuButton>열매맺기</S.MenuButton>
					</>
				)}
			</S.InnerWrapper>
		</S.MenuContainer>
	);
};

export default MessageMenu;
