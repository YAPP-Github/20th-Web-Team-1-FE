import React, { useEffect, useState } from 'react';
import * as S from './MessageBox.styled';
import SideDrawer from '@/components/shared/Modal/SideDrawer';
import { MessagesType } from './MessageBox.type';

import { MessageMenu, MessageContent, MakingFruitMenu, BottomButtons } from '@/components/features/MessageBox';
import MovingFolderModal from '@/components/shared/Modal/MovingFolderModal';

const MessageBox = () => {
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [Messages, setMessages] = useState<MessagesType | null>({
		hasNext: false,
		responseDto: [
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: true,
				id: 1,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 2,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 3,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 4,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 5,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 6,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 7,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 8,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 0,
				opening: true,
				senderNickname: 'sender1',
				senderProfileImage: 'string',
			},
			{
				alreadyRead: false,
				anonymous: false,
				content: 'content',
				createdDate: '2022-07-10T16:01:20.144Z',
				favorite: false,
				id: 0,
				opening: true,
				senderNickname: 'sender100',
				senderProfileImage: 'string',
			},
		],
	});
	const [isEdit, setIsEdit] = useState(false);
	const [checkMode, setCheckMode] = useState(false);
	const [isMakingFruit, setIsMakingFruit] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [isShownCheckedMessages, setIsShownCheckedMessages] = useState(Boolean);
	const [moveItems, setMoveItems] = useState<number[]>([]);

	const onToggleCheckMessage = (id: number) => {
		checkMessages.includes(id)
			? setCheckMessages(checkMessages.filter((message) => message !== id))
			: setCheckMessages([...checkMessages, id]);
	};

	const onToggleOpenDrawer = () => {
		setOpenedDrawer(() => !openedDrawer);
	};

	const deleteMessages = () => {
		const NewMessages = Messages?.responseDto.filter((message) => !checkMessages.includes(message.id));
		setMessages(Messages ? { hasNext: Messages.hasNext, responseDto: NewMessages ? NewMessages : [] } : null);
	};

	const onToggleMovingFolderModal = () => {
		setIsMoving(!isMoving);
	};

	const moveToFolder = () => {
		console.log('move');
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
					numberOfMessages={Messages ? Messages.responseDto.length : 0}
					numberOfCheckedMessages={checkMessages.length}
				/>
			) : (
				<MessageMenu
					isEdit={isEdit}
					editMakingToggleHandler={editMakingToggleHandler}
					onToggleMovingFolderModal={onToggleMovingFolderModal}
					onToggleOpenDrawer={onToggleOpenDrawer}
					deleteMessages={deleteMessages}
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
			<S.MessageListContainer isEdit={isEdit}>
				{isShownCheckedMessages
					? Messages?.responseDto
							.filter((message) => !checkMessages.includes(message.id))
							.map((res, idx) => (
								<MessageContent
									key={`message-box-messga${idx}`}
									message={res}
									checkMode={checkMode}
									onToggleCheckMessage={onToggleCheckMessage}
									checkMessages={checkMessages}
								/>
							))
					: Messages?.responseDto.map((res, idx) => (
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
			</S.MessageListContainer>
		</S.Wrapper>
	);
};

export default MessageBox;
