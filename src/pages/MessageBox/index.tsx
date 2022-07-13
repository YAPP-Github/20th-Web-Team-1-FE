import React, { useEffect, useState } from 'react';
import * as S from './MessageBox.styled';
import SideDrawer from '@/components/shared/Modal/SideDrawer';
import { useMutation, useQuery } from 'react-query';
import { MessageMenu, MessageContent, MakingFruitMenu, BottomButtons } from '@/components/features/MessageBox';
import MovingFolderModal from '@/components/shared/Modal/MovingFolderModal';
import { getMessages, deleteMessage } from '@/apis/messages';
import { MessagesType } from '@/types/message';
import AlertModal from '@/components/shared/Modal/AlertModal';
const MessageBox = () => {
	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [checkMode, setCheckMode] = useState(false);
	const [isMakingFruit, setIsMakingFruit] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [isShownCheckedMessages, setIsShownCheckedMessages] = useState(false);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const { data: messages } = useQuery<MessagesType>('getMessages', () => getMessages());
	const { mutate: deleteMutate } = useMutation(() => deleteMessage(checkMessages));

	const [moveItems, setMoveItems] = useState<number[]>([]);

	console.log(isOpenDeleteModal);

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
			{isShownCheckedMessages
				? messages?.responseDto
						.filter((message) => checkMessages.includes(message.id))
						.map((res, idx) => (
							<MessageContent
								key={`message-box-messga${idx}`}
								message={res}
								checkMode={checkMode}
								onToggleCheckMessage={onToggleCheckMessage}
								checkMessages={checkMessages}
							/>
						))
				: messages?.responseDto.map((res, idx) => (
						<MessageContent
							key={`message-box-messga${idx}`}
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
			<SideDrawer
				username="username"
				email="string"
				profileImg="string"
				onModal={openedDrawer}
				setOnModal={onToggleOpenDrawer}
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
		</S.Wrapper>
	);
};

export default MessageBox;
