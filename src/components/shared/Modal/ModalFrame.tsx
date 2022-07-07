import React from 'react';
import * as S from './ModalFrame.styled';
import ModalPortal from './ModalPortal';
import { ModalFramePropsType } from './type';

const ModalFrame = ({ children, onModal, setOnModal }: ModalFramePropsType) => {
	return (
		<ModalPortal>
			<S.ModalBackDrop show={onModal} onClick={() => setOnModal(false)}></S.ModalBackDrop>
			{children}
		</ModalPortal>
	);
};

export default ModalFrame;
