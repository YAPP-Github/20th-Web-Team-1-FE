import React from 'react';
import * as S from './MessageTopMenu.styled';
import HamburgerMenuBtn from '@/assets/images/shared/hamburger.svg';
import { MenuButton } from '@/components/shared';

type Props = {
	category: string;
	leftBtnName: string;
	rightBtnName: string;
	onClickLeftBtn: () => void;
	onClickRightBtn: () => void;
};

const MessageTopMenu = ({ category, leftBtnName, rightBtnName, onClickLeftBtn, onClickRightBtn }: Props) => {
	return (
		<S.MessageTopMenuContainer>
			<S.MessageLeftMenu>
				<button type="button">
					<img src={HamburgerMenuBtn} alt="햄버거" />
				</button>

				<h1>{category}</h1>
			</S.MessageLeftMenu>

			<div>
				<MenuButton name={leftBtnName} onClick={onClickLeftBtn} />
				<MenuButton name={rightBtnName} onClick={onClickRightBtn} />
			</div>
		</S.MessageTopMenuContainer>
	);
};

export default MessageTopMenu;
