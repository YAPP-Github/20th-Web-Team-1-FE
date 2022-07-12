import React from 'react';
import MakingFruitPopup from '../MakingFruitPopup';
import * as S from './MakingFruitMenu.styled';
import MessageCheckBox from '../MessageCheckBox';
import { MakingFruitMenuProps } from './MakingFruitMenu.type';

const MakingFruitMenu = ({
	isShownCheckedMessages,
	setIsShownCheckedMessages,
	numberOfMessages,
	numberOfCheckedMessages,
}: MakingFruitMenuProps) => {
	const handleToggleChecked = () => {
		setIsShownCheckedMessages(!isShownCheckedMessages);
	};

	return (
		<S.MenuContainer>
			<MakingFruitPopup />
			<S.InfoContainer>
				<S.FlexBox>
					<MessageCheckBox checked={isShownCheckedMessages} handleToggleChecked={handleToggleChecked} id={1} />
					<S.CheckText>선택한 메시지 모아보기</S.CheckText>
				</S.FlexBox>
				<S.CheckText>
					<S.StrongText>{numberOfCheckedMessages} </S.StrongText> / {numberOfMessages}
				</S.CheckText>
			</S.InfoContainer>
		</S.MenuContainer>
	);
};

export default MakingFruitMenu;
