import styled from '@emotion/styled';
import { ButtonStyledType } from './type';

export const Button = styled.button<ButtonStyledType>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	border: 0;
	border-radius: 10px;
	background-color: ${({ bgColor, theme }) =>
		bgColor === 'primary' ? theme.colors.bt_primary[200] : theme.colors.bt_grey[20]};
	color: ${({ bgColor, theme }) => (bgColor === 'primary' ? theme.colors.bt_white : theme.colors.bt_grey[50])};
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ fontWeight, theme }) => theme.fontWeight[fontWeight]};
	line-height: ${(props) => props.theme.lineHeight.lh16};
	letter-spacing: -0.02em;

	&:focus-visible {
		outline: 2px solid #000000;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}
`;
