import React from 'react';
import * as S from './MenuButton.styled';

type Props = {
	name: string;
	onClick: () => void;
};

const MenuButton = ({ name, onClick }: Props) => {
	return (
		<S.MenuButtonWrapper type="button" onClick={onClick}>
			{name}
		</S.MenuButtonWrapper>
	);
};

export default MenuButton;
