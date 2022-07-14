import React from 'react';
import * as S from './ModalFrame.styled';
import ModalPortal from './ModalPortal';
import { Props } from './ModalFrame.type';

const ModalFrame = ({ children, onModal, setOnModal }: Props) => {
	return (
		<ModalPortal>
			<S.ModalBackDrop show={onModal} onClick={() => setOnModal(false)} />
			{children}
		</ModalPortal>
	);
};

export default ModalFrame;
