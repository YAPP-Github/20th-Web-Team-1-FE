import styled from '@emotion/styled';
import { SideDrawerStyledPropType } from './type';

export const SideDrawerContainer = styled.div<SideDrawerStyledPropType>`
	position: fixed;
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	top: 0;
	left: 0;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.bt_white};
	overflow-y: auto;
	z-index: 200;
	transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	transform: ${({ show }) => (show ? 'translateX(0px)' : 'translateX(-100%)')};
`;
