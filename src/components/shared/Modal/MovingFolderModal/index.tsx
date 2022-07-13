import React, { useState } from 'react';
import ModalFrame from '../ModalFrame';
import { MovingFolderModalProps } from './MovingFolderModal.type';
import * as S from './MovingFolderModal.styled';
import Button from '../../Button';

const MovingFolderModal = ({ isMoving, onToggleMovingFolderModal }: MovingFolderModalProps) => {
	const [folders, setFolders] = useState(['aaa', 'bbb', 'vvv']);
	const [selectFolder, setSelectFolder] = useState('');

	return (
		<ModalFrame onModal={isMoving} setOnModal={onToggleMovingFolderModal}>
			<S.Wrapper>
				<S.ModalInner>
					<S.MoadlHead>
						<S.ModalTitle>이동시킬 폴더를 선택해주세요.</S.ModalTitle>
					</S.MoadlHead>
					<S.ModalBody>
						<S.FolderContainer>
							{folders.map((folder) => (
								<S.Folder key={folder} onClick={() => setSelectFolder(folder)} isSelected={folder === selectFolder}>
									{folder}
								</S.Folder>
							))}
						</S.FolderContainer>
						<S.ModalButtonContainer>
							<S.ModalButton>
								<Button type="button" bgColor="normal" fontWeight="bold" onClick={onToggleMovingFolderModal}>
									취소하기
								</Button>
							</S.ModalButton>
							<S.MoveButton>
								<Button
									type="button"
									bgColor="primary"
									fontWeight="bold"
									onClick={() => console.log('move the folder')}
								>
									이동하기
								</Button>
							</S.MoveButton>
						</S.ModalButtonContainer>
					</S.ModalBody>
				</S.ModalInner>
			</S.Wrapper>
		</ModalFrame>
	);
};

export default MovingFolderModal;
