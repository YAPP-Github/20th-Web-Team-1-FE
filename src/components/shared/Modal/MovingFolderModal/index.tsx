import React from 'react';
import ModalFrame from '../ModalFrame';
import { MovingFolderModalProps } from './MovingFolderModal.type';
import * as S from './MovingFolderModal.styled';

const MovingFolderModal = ({ isMoving, onToggleMovingFolderModal }: MovingFolderModalProps) => {
	return (
		<ModalFrame onModal={isMoving} setOnModal={onToggleMovingFolderModal}>
			<S.Wrapper>
				<S.ModalInner>
					<S.MoadlHead>
						<S.ModalTitle>이동시킬 폴더를 선택해주세요.</S.ModalTitle>
					</S.MoadlHead>
					<S.ModalBody>
						<S.FolderContainer>
							<S.Folder>aaa</S.Folder>
							<S.Folder>bbb</S.Folder>
							<S.Folder>xxx</S.Folder>
						</S.FolderContainer>
						<S.ModalButtonContainer>
							<S.ModalButton onClick={onToggleMovingFolderModal}>취소하기</S.ModalButton>
							<S.MoveButton onClick={() => console.log('move the folder')}>이동하기</S.MoveButton>
						</S.ModalButtonContainer>
					</S.ModalBody>
				</S.ModalInner>
			</S.Wrapper>
		</ModalFrame>
	);
};

export default MovingFolderModal;
