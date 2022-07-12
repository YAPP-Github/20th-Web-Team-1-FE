import styled from '@emotion/styled';
import { StyledProps } from './type';

export const ModalBackDrop = styled.div<StyledProps>`
	position: fixed;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	width: inherit;
	margin: inherit;
	background-color: rgba(0, 0, 0, 0.66);
	inset: 0px;
	z-index: 100;
`;
