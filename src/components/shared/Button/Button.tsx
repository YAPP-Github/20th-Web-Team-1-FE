import React from 'react';
import * as S from './Button.styled';
import { Props } from './Button.type';

const Button = ({ type, width, bgColor, onClick, fontWeight, children }: Props) => {
	return (
		<S.Button type={type} width={width} bgColor={bgColor} fontWeight={fontWeight} onClick={onClick}>
			{children}
		</S.Button>
	);
};

export default Button;
