import styled from '@emotion/styled';
import { StyledProps } from './ModalFrame.type';

export const ModalBackDrop = styled.div<StyledProps>`
	position: fixed;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	width: inherit;
	margin: inherit;
	background-color: rgba(0, 0, 0, 0.66);
	inset: 0px;
	z-index: 10;
`;

export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
	z-index: 1000;
`;

export const ModalWrapper = styled.div`
	min-width: 350px;
	min-height: 496px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.bt_white};
`;
