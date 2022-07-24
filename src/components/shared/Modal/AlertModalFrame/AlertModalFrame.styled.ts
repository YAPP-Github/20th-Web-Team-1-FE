import styled from '@emotion/styled';
import { ModalBackDrop } from '../ModalFrame.styled';
import { ModalContainer, ModalWrapper } from '../ModalFrame.styled';

export const AlertModalBackDrop = ModalBackDrop;

export const AlertModalContainer = ModalContainer;

export const AlertModalWrapper = ModalWrapper;

export const SmallAlertModalWrapper = styled(AlertModalWrapper)`
	min-height: 273px;
	width: 100%;
	max-width: 350px;
`;
