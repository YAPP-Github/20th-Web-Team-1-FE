import styled from '@emotion/styled';
import { ModalBackDropStyledPropsType } from './type';

export const ModalBackDrop = styled.div<ModalBackDropStyledPropsType>`
	position: fixed;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.66);
	inset: 0px;
	z-index: 100;
`;
