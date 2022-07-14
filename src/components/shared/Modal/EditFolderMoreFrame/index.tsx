import React from 'react';
import ModalPortal from '../ModalPortal';
import * as S from './EditFolderMoreFrame.styled';
import { Props } from './EditFolderMoreFrame.type';

const EditFolderMoreFrame = ({ onEditMoreModal, setOnEditMoreModal, children }: Props) => {
	return (
		<ModalPortal>
			<S.EditFolderMoreModalBackDrop show={onEditMoreModal} onClick={setOnEditMoreModal} />
			{children}
		</ModalPortal>
	);
};

export default EditFolderMoreFrame;
