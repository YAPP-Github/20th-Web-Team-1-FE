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
		props.bgColor === 'primary' ? props.theme.colors.bt_primary[200] : props.theme.colors.bt_grey[20]};
	color: ${(props) => (props.bgColor === 'primary' ? props.theme.colors.bt_white : props.theme.colors.bt_grey[50])};
	font-size: ${(props) => props.theme.fontSize.f16};
	font-weight: ${(props) =>
		props.bgColor === 'primary' ? props.theme.fontWeight.bold : props.theme.fontWeight.medium};
	line-height: ${(props) => props.theme.lineHeight.lh16};
	letter-spacing: -0.02em;
`;
