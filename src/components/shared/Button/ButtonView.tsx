import React from 'react';
import * as S from './Button.styled';
import { ButtonType } from './type';

const ButtonView = ({ type, width, bgColor, onClick, fontWeight, children }: ButtonType) => {
	return (
		<S.Button type={type} width={width} bgColor={bgColor} fontWeight={fontWeight} onClick={onClick}>
			{children}
		</S.Button>
	);
};

export default ButtonView;
