import styled from '@emotion/styled';
import { css } from '@emotion/react';

type StyledProps = {
	show: boolean;
};

export const ToastWrapper = styled.div<StyledProps>`
	position: absolute;
	top: 86px;
	left: 50%;
	transform: translate(-50%, 0%);
	width: 83%;
	padding: 12px 20px;
	margin: auto;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	transition: top 0.5s, opacity 0.5s;

	${({ show }) =>
		show
			? css`
					top: 86px;
					opacity: 1;
			  `
			: css`
					top: 0px;
					opacity: 0;
			  `}

	& > p {
		font-weight: ${({ theme }) => theme.fontWeight.light};
		font-size: 14px;
		line-height: 13px;
	}
`;
