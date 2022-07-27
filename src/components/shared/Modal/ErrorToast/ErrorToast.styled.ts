import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const toastAnimation = keyframes`
  0% {
    bottom: 0px;
    opacity: 0;
  }
  50% {
    bottom: 45px;
	opacity: 1;
  }
  100% {
    bottom: 0px;
    opacity: 0;
  }
  `;

export const ToastWrapper = styled.div`
	position: absolute;
	bottom: 0px;
	left: 50%;
	transform: translate(-50%, 0%);
	width: 83%;
	padding: 12px 20px;
	margin: auto;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	animation: ${toastAnimation} 5s;
	& > p {
		font-weight: ${({ theme }) => theme.fontWeight.light};
		font-size: 14px;
		line-height: 13px;
	}
`;
