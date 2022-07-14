import React, { useEffect, useState } from 'react';
import * as S from './MessageBox.styled';
import SideDrawer from '@/components/shared/Modal/SideDrawer';
import { useMutation, useQuery } from 'react-query';
import { MessageMenu, MessageContent, MakingFruitMenu, BottomButtons } from '@/components/features/MessageBox';
import MovingFolderModal from '@/components/shared/Modal/MovingFolderModal';
import { getMessages, deleteMessage } from '@/apis/messages';
import { MessagesType } from '@/types/message';
import AlertModal from '@/components/shared/Modal/AlertModal';
import DeleteAlertModal from '../../components/shared/Modal/DeleteAlertModal/index';

const MessageBox = () => {
	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [isEdit, setIsEdit] = useState(false);
	const [checkMode, setCheckMode] = useState(false);
	const [isMakingFruit, setIsMakingFruit] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [isShownCheckedMessages, setIsShownCheckedMessages] = useState(false);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const { data: messages } = useQuery<MessagesType>('getMessages', () => getMessages());
	const { mutate: deleteMutate } = useMutation(() => deleteMessage(checkMessages));

	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [onEditMoreModal, setOnEditMoreModal] = useState(false);
	const [isOpenedMessageDeleteAlertModal, setIsOpenedMessageDeleteAlertModal] = useState(false);
	const [isOpenedFolderDeleteAlertModal, setIsOpenedFolderDeleteAlertModal] = useState(false);

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

	const handleFolderDelete = () => {
		console.log('폴더 삭제 로직 실행');
		handleFolderDeleteAlertModalToggle('close');
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

	const moveToFolder = () => {
		console.log('move');
	};

	const deleteMessageHandler = () => {
		setIsOpenDeleteModal(false);
		deleteMutate();
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
					isShownCheckedMessages={isShownCheckedMessages}
					setIsShownCheckedMessages={setIsShownCheckedMessages}
					numberOfMessages={messages ? messages.responseDto.length : 0}
					numberOfCheckedMessages={checkMessages.length}
				/>
			) : (
				<MessageMenu
					isEdit={isEdit}
					editMakingToggleHandler={editMakingToggleHandler}
					onToggleMovingFolderModal={onToggleMovingFolderModal}
					onToggleOpenDrawer={onToggleOpenDrawer}
					deleteMessages={() => setIsOpenDeleteModal(true)}
				/>
			)}

			<SideDrawer
				onModal={openedDrawer}
				setOnModal={onToggleOpenDrawer}
				onEditMoreModal={onEditMoreModal}
				modalPosition={modalPosition}
				handleEditMoreModalOpen={handleEditMoreModalOpen}
				handleEditMoreModalClose={handleEditMoreModalClose}
				handleFolderDeleteAlertModalToggle={handleFolderDeleteAlertModalToggle}
			/>

			{isMoving && <MovingFolderModal isMoving={isMoving} onToggleMovingFolderModal={onToggleMovingFolderModal} />}
			<S.MessageListContainer isEdit={isEdit}></S.MessageListContainer>
			{isOpenDeleteModal && (
				<AlertModal
					isOpen={isOpenDeleteModal}
					modalTitle="메세지"
					modalMainImage="messageAlertModal"
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
			<S.MessageListContainer isEdit={isEdit}>
				{isShownCheckedMessages
					? messages?.responseDto
							.filter((message) => !checkMessages.includes(message.id))
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
				{checkMode && (
					<BottomButtons
						isEdit={isEdit}
						isMakingFruit={isMakingFruit}
						editMakingToggleHandler={editMakingToggleHandler}
					/>
				)}
			</S.MessageListContainer>

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
