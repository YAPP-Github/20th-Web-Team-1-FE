import styled from '@emotion/styled';
import { ButtonStyledType } from './type';

export const Button = styled.button<ButtonStyledType>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.width || '326px'};
	height: 50px;
	border: 0;
	border-radius: 10px;
	outline: 0;
	background-color: ${(props) =>
		props.bgColor === 'primary' ? props.theme.colors.bt_green : props.theme.colors.bt_lightGray};
	color: ${(props) => (props.bgColor === 'primary' ? props.theme.colors.bt_white : props.theme.colors.bt_deepGray)};
	font-size: ${(props) => props.theme.fontSize.f16};
	font-weight: ${(props) => props.theme.fontWeight.bold};
	line-height: ${(props) => props.theme.lineHeight.lh16};
	letter-spacing: -0.02em;
`;
