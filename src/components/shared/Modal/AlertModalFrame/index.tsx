import React from 'react';
import ModalPortal from '../ModalPortal';
import * as S from './AlertModalFrame.styled';
import { Props } from './AlertModalFrame.type';

const AlertModalFrame = ({ onAlertModal, children }: Props) => {
	return (
		<ModalPortal>
			<S.AlertModalBackDrop show={onAlertModal} />
			<S.AlertModalContainer>
				<S.AlertModalWrapper>{children}</S.AlertModalWrapper>
			</S.AlertModalContainer>
		</ModalPortal>
	);
};

export default AlertModalFrame;
