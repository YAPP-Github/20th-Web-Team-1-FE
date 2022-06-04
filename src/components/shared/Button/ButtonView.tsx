import React from 'react';
import * as S from './Button.styled';
import { ButtonType } from './type';

const ButtonView = ({ type, width, bgColor, children }: ButtonType) => {
	return (
		<S.Button type={type} width={width} bgColor={bgColor}>
			{children}
		</S.Button>
	);
};

export default ButtonView;
