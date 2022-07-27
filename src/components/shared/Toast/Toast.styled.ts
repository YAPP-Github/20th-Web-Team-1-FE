import styled from '@emotion/styled';
import { css } from '@emotion/react';

type StyledProps = {
	show: boolean;
};

export const ToastWrapper = styled.div<StyledProps>`
	position: absolute;
	bottom: 45px;
	left: 50%;
	transform: translate(-50%, 0%);
	width: 83%;
	padding: 12px 20px;
	margin: auto;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	transition: bottom 0.5s, opacity 0.5s;

	${({ show }) =>
		show
			? css`
					bottom: 115px;
					opacity: 1;
			  `
			: css`
					bottom: 45px;
					opacity: 0;
			  `}

	& > p {
		font-weight: ${({ theme }) => theme.fontWeight.light};
		font-size: 14px;
		line-height: 13px;
	}
`;
