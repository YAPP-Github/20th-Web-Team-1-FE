import { getForest } from '@/apis/forest';
import { updateMovingMessages } from '@/apis/messages';
import { errorToastState } from '@/stores/modal';
import { myInfoState } from '@/stores/user';
import { Folder } from '@/types/forest';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from '../../Button';
import ModalFrame from '../ModalFrame';
import * as S from './MovingFolderModal.styled';
import { MovingFolderModalProps } from './MovingFolderModal.type';

const MovingFolderModal = ({
	isMoving,
	setIsEdit,
	onToggleMovingFolderModal,
	checkMessages,
	getMessageList,
	handleAfterAction,
}: MovingFolderModalProps) => {
	const myInfo = useRecoilValue(myInfoState);
	const setErrorToastText = useSetRecoilState(errorToastState);

	const userId = myInfo?.id;

	const [selectFolder, setSelectFolder] = useState(0);

	const { data: folders } = useQuery<Folder[] | undefined>(['getForest', userId], () => getForest(userId), {
		enabled: !!myInfo,
	});

	const { mutate: updateMovingMessagesMutate } = useMutation(
		() => updateMovingMessages({ messageIds: checkMessages, treeId: selectFolder }),
		{
			onSuccess: () => {
				getMessageList && getMessageList();
				onToggleMovingFolderModal();
				setIsEdit && setIsEdit(false);
				handleAfterAction && handleAfterAction();
				setErrorToastText('폴더 이동에 성공했습니다! ');
			},
			onError: () => {
				setErrorToastText('네트워크 에러! 폴더 이동에 실패했습니다.');
			},
		},
	);

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
								<Button
									type="button"
									bgColor="primary"
									fontWeight="bold"
									onClick={() => {
										updateMovingMessagesMutate();
									}}
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
