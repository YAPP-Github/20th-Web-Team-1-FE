import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as S from './MessageBox.styled';
import { getMessages, deleteMessage } from '@/apis/messages';
import { getForest, deleteTree } from '@/apis/forest';
import { MessagesType } from '@/types/message';
import { AlertModal, MovingFolderModal, SideDrawer, DeleteAlertModal } from '@/components/shared';
import { MessageMenu, MessageContent, MakingFruitMenu, BottomButtons } from '@/components/features/MessageBox';
import { Folder } from '@/types/forest';

import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';

const MessageBox = () => {
	const { treeId } = useParams();
	const myInfo = useRecoilValue(myInfoState);
	const queryClient = useQueryClient();
	const { data: messages } = useQuery<MessagesType>(['getMessages', treeId], () => getMessages(treeId));

	const { mutate: deleteMutate } = useMutation(() => deleteMessage(checkMessages), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const { data: trees } = useQuery<Folder[] | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id));

	const treeDeleteMutation = useMutation(deleteTree, {
		onSuccess: () => {
			queryClient.invalidateQueries('getForest');
			handleFolderDeleteAlertModalToggle('close');
		},
	});

	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [isEdit, setIsEdit] = useState(false);
	const [checkMode, setCheckMode] = useState(false);
	const [isMakingFruit, setIsMakingFruit] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [showCheckedMessages, setShowCheckedMessages] = useState(false);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [onEditMoreModal, setOnEditMoreModal] = useState(false);
	const [isOpenedMessageDeleteAlertModal, setIsOpenedMessageDeleteAlertModal] = useState(false);
	const [isOpenedFolderDeleteAlertModal, setIsOpenedFolderDeleteAlertModal] = useState(false);
	const [checkedTreeId, setCheckedTreeId] = useState<number>();

	const handleEditMoreModalOpen = (event: React.MouseEvent<HTMLElement>) => {
		const closest = event.currentTarget.closest('a') as HTMLAnchorElement;
		const rect = closest.getBoundingClientRect();
		const newPosition = { top: rect.top, left: rect.left + rect.width };

		setModalPosition(newPosition);
		setOnEditMoreModal(true);
	};

	const handleEditMoreModalClose = () => {
		setOnEditMoreModal(false);
	};

	const handleClickTreeFolderMoreMenuButton = (treeId: number) => {
		setCheckedTreeId(treeId);
	};

	const handleFolderDelete = () => {
		treeDeleteMutation.mutate(checkedTreeId);
	};

	const handleFolderDeleteAlertModalToggle = (state: 'open' | 'close') => {
		setIsOpenedFolderDeleteAlertModal(state === 'open');
		handleEditMoreModalClose();
	};

	const onToggleCheckMessage = (id: number) => {
		checkMessages.includes(id)
			? setCheckMessages(checkMessages.filter((message) => message !== id))
			: setCheckMessages([...checkMessages, id]);
	};

	const onToggleOpenDrawer = () => {
		setOpenedDrawer(() => !openedDrawer);
	};

	const onToggleMovingFolderModal = () => {
		setIsMoving(!isMoving);
	};

	const onClickDeleteButton = () => {
		if (checkMessages.length > 0) {
			setIsOpenDeleteModal(true);
		} else {
			alert('1개 이상의 삭제할 메세지를 선택해주세요! ');
		}
	};

	const onClickMovingFolderButton = () => {
		if (checkMessages.length > 0) {
			onToggleMovingFolderModal();
		} else {
			alert('1개 이상의 이동할 메세지를 선택해주세요! ');
		}
	};

	const deleteMessageHandler = () => {
		setIsOpenDeleteModal(false);
		deleteMutate();
		setCheckMessages([]);
	};

	const editMakingToggleHandler = (path: string) => {
		if (path === 'edit') {
			setIsEdit(true);
			setIsMakingFruit(false);
			return;
		}
		if (path === 'making') {
			setIsEdit(false);
			setIsMakingFruit(true);
			return;
		}
		if (path === 'back') {
			setIsEdit(false);
			setIsMakingFruit(false);
		}
	};

	const handleMessageDeleteAlertModalToggle = (state: 'open' | 'close') => {
		setIsOpenedMessageDeleteAlertModal(state === 'open');
	};

	useEffect(() => {
		setCheckMessages([]);
	}, [checkMode]);

	useEffect(() => {
		setCheckMode(isEdit || isMakingFruit);
	}, [isEdit, isMakingFruit, setCheckMode]);

	return (
		<S.Wrapper>
			{isMakingFruit ? (
				<MakingFruitMenu
					showCheckedMessages={showCheckedMessages}
					setShowCheckedMessages={setShowCheckedMessages}
					numberOfMessages={messages ? messages.responseDto.length : 0}
					numberOfCheckedMessages={checkMessages.length}
				/>
			) : (
				<MessageMenu
					isEdit={isEdit}
					editMakingToggleHandler={editMakingToggleHandler}
					onToggleOpenDrawer={onToggleOpenDrawer}
					onToggleMovingFolderModal={onClickMovingFolderButton}
					deleteMessages={onClickDeleteButton}
				/>
			)}

			<S.MessageListContainer checkMode={checkMode} isMakingFruit={isMakingFruit}>
				{showCheckedMessages
					? messages?.responseDto
							.filter((message) => checkMessages.includes(message.id))
							.map((res, idx) => (
								<MessageContent
									key={`message-box-message${idx}`}
									message={res}
									checkMode={checkMode}
									onToggleCheckMessage={onToggleCheckMessage}
									checkMessages={checkMessages}
								/>
							))
					: messages?.responseDto.map((res, idx) => (
							<MessageContent
								key={`message-box-message${idx}`}
								message={res}
								checkMode={checkMode}
								onToggleCheckMessage={onToggleCheckMessage}
								checkMessages={checkMessages}
							/>
					  ))}
				{messages?.responseDto.length === 0 && (
					<S.NoMessageContainer>
						{treeId ? (
							<>
								👀아직 해당 메세지함에 이동한 메세지가 없습니다. <br />
								기본 폴더에서 메세지를 이동해주세요!😸
							</>
						) : (
							<>
								아직 도착한 메세지가 없습니다.
								<br />
								스스로를 위한 메세지를 써보는것은 어떨까요?😸
							</>
						)}
					</S.NoMessageContainer>
				)}

				{checkMode && (
					<BottomButtons
						isEdit={isEdit}
						isMakingFruit={isMakingFruit}
						editMakingToggleHandler={editMakingToggleHandler}
						checkMessages={checkMessages}
						setShowCheckedMessages={setShowCheckedMessages}
					/>
				)}
			</S.MessageListContainer>

			<SideDrawer
				trees={trees}
				onModal={openedDrawer}
				setOnModal={onToggleOpenDrawer}
				onEditMoreModal={onEditMoreModal}
				modalPosition={modalPosition}
				handleEditMoreModalOpen={handleEditMoreModalOpen}
				handleEditMoreModalClose={handleEditMoreModalClose}
				handleFolderDeleteAlertModalToggle={handleFolderDeleteAlertModalToggle}
				onClickTreeFolderMoreMenuButton={handleClickTreeFolderMoreMenuButton}
			/>

			{isMoving && (
				<MovingFolderModal
					isMoving={isMoving}
					onToggleMovingFolderModal={onToggleMovingFolderModal}
					checkMessages={checkMessages}
				/>
			)}

			{isOpenDeleteModal && (
				<AlertModal
					isOpen={isOpenDeleteModal}
					modalTitle="메세지"
					modalMainImage="deleteMessageModal"
					modalDescMessages={[
						'메시지 삭제 시',
						'메세지함에 있던 메시지가 삭제되며',
						'삭제 후에는 복구할 수 없어요',
						'정말 삭제하시겠습니까?',
					]}
					buttonTitle="삭제하기"
					handleCloseBtnClick={() => {
						setIsOpenDeleteModal(false);
					}}
					handleMainBtnClick={deleteMessageHandler}
				/>
			)}

			{isOpenedMessageDeleteAlertModal && (
				<DeleteAlertModal
					deleteTargetType="message"
					deleteTarget="메시지"
					onAlertModal={isOpenedMessageDeleteAlertModal}
					handleAlertModalToggle={() => handleMessageDeleteAlertModalToggle('close')}
					handleTargetDelete={() => console.log('메시지 삭제 로직 실행')}
				/>
			)}

			{isOpenedFolderDeleteAlertModal && (
				<DeleteAlertModal
					deleteTargetType="folder"
					deleteTarget="프로젝트A"
					onAlertModal={isOpenedFolderDeleteAlertModal}
					handleAlertModalToggle={() => handleFolderDeleteAlertModalToggle('close')}
					handleTargetDelete={handleFolderDelete}
				/>
			)}
		</S.Wrapper>
	);
};

export default MessageBox;
