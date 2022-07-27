import React from 'react';
import * as S from './MakingFruitMenu.styled';
import { MakingFruitMenuProps } from './MakingFruitMenu.type';
import { MessageCheckBox, MakingFruitPopup } from '@/components/features/MessageBox';

const MakingFruitMenu = ({
	showCheckedMessages,
	setShowCheckedMessages,
	numberOfCheckedMessages,
}: MakingFruitMenuProps) => {
	const handleToggleChecked = () => {
		setShowCheckedMessages(!showCheckedMessages);
	};

	return (
		<S.MenuContainer>
			<MakingFruitPopup />
			<S.InfoContainer>
				<S.FlexBox>
					<MessageCheckBox checked={showCheckedMessages} handleToggleChecked={handleToggleChecked} id={1} />
					<S.CheckText>선택한 메시지 모아보기</S.CheckText>
				</S.FlexBox>
				<S.CheckText>
					<S.StrongText>{numberOfCheckedMessages} </S.StrongText> / 8
				</S.CheckText>
			</S.InfoContainer>
		</S.MenuContainer>
	);
};

export default MakingFruitMenu;
