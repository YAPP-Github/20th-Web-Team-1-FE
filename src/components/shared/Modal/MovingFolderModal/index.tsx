import React, { useState } from 'react';
import ModalFrame from '../ModalFrame';
import { MovingFolderModalProps } from './MovingFolderModal.type';
import * as S from './MovingFolderModal.styled';
import Button from '../../Button';
import { Folder } from '@/types/forest';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';
import { readUserForest } from '@/apis/forest';
import { moveMessages } from '@/apis/messages';
import { useNavigate, useParams } from 'react-router-dom';

const MovingFolderModal = ({ isMoving, onToggleMovingFolderModal, checkMessages }: MovingFolderModalProps) => {
	const { messageId } = useParams();

	const navigate = useNavigate();

	const queryClient = useQueryClient();

	const myInfo = useRecoilValue(myInfoState);

	const userId = myInfo?.id;

	const [selectFolder, setSelectFolder] = useState(0);

	const { data: folders } = useQuery<Folder[] | undefined>(['readUserForest', userId], () => readUserForest(userId), {
		enabled: !!userId,
	});

	const { mutate: moveMutate } = useMutation(() => moveMessages({ messageIds: checkMessages, treeId: selectFolder }), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const onClickMovingFolderButton = () => {
		moveMutate();
		onToggleMovingFolderModal();

		if (messageId) {
			navigate('/messages');
		}
	};

	return (
		<ModalFrame onModal={isMoving} setOnModal={onToggleMovingFolderModal}>
			<S.Wrapper>
				<S.ModalInner>
					<S.ModalHead>
						<S.ModalTitle>이동시킬 폴더를 선택해주세요.</S.ModalTitle>
					</S.ModalHead>
					<S.ModalBody>
						<S.FolderContainer>
							{folders?.map((folder) => (
								<S.Folder
									key={folder.id}
									onClick={() => setSelectFolder(folder.id)}
									isSelected={folder.id === selectFolder}
								>
									{folder.name}
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
								<Button type="button" bgColor="primary" fontWeight="bold" onClick={onClickMovingFolderButton}>
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
