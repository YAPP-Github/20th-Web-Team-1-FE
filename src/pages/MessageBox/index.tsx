import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as S from './MessageBox.styled';
import { getMessages, deleteMessage } from '@/apis/messages';
import { MessagesType } from '@/types/message';
import { MovingFolderModal, SideDrawer, DeleteAlertModal } from '@/components/shared';
import { MessageMenu, MessageContent, MakingFruitMenu, BottomButtons } from '@/components/features/MessageBox';

const MessageBox = () => {
	const { treeId } = useParams();

	const queryClient = useQueryClient();

	const { data: messages } = useQuery<MessagesType>(['getMessages', treeId], () => getMessages(treeId));

	const { mutate: deleteMutate } = useMutation(() => deleteMessage(checkMessages), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [isEdit, setIsEdit] = useState(false);
	const [checkMode, setCheckMode] = useState(false);
	const [isMakingFruit, setIsMakingFruit] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [showCheckedMessages, setShowCheckedMessages] = useState(false);
	const [isOpenedMessageDeleteAlertModal, setIsOpenedMessageDeleteAlertModal] = useState(false);

	const [openedDrawer, setOpenedDrawer] = useState(false);

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
			setIsOpenedMessageDeleteAlertModal(true);
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
		setIsOpenedMessageDeleteAlertModal(false);
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
									idx={idx}
									checkMode={checkMode}
									onToggleCheckMessage={onToggleCheckMessage}
									checkMessages={checkMessages}
								/>
							))
					: messages?.responseDto.map((res, idx) => (
							<MessageContent
								key={`message-box-message${idx}`}
								message={res}
								idx={idx}
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

			{isMoving && (
				<MovingFolderModal
					isMoving={isMoving}
					onToggleMovingFolderModal={onToggleMovingFolderModal}
					checkMessages={checkMessages}
				/>
			)}

			{isOpenedMessageDeleteAlertModal && (
				<DeleteAlertModal
					deleteTargetType="message"
					deleteTarget="메시지"
					onAlertModal={isOpenedMessageDeleteAlertModal}
					handleAlertModalToggle={() => setIsOpenedMessageDeleteAlertModal(false)}
					handleTargetDelete={deleteMessageHandler}
				/>
			)}

			<SideDrawer onModal={openedDrawer} setOnModal={onToggleOpenDrawer} />
		</S.Wrapper>
	);
};

export default MessageBox;
