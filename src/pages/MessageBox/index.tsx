import React, { useEffect, useState } from 'react';
import * as S from './MessageBox.styled';
import SideDrawer from '@/components/shared/Modal/SideDrawer';
import { MessagesType } from './MessageBox.type';

import { MessageMenu, MessageContent } from '@/components/features/MessageBox';
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
				favorite: false,
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
	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [isMoving, setIsMoving] = useState(false);
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

	useEffect(() => {
		setCheckMessages([]);
	}, [isEdit]);

	return (
		<S.Wrapper>
			<MessageMenu
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				onToggleMovingFolderModal={onToggleMovingFolderModal}
				onToggleOpenDrawer={onToggleOpenDrawer}
				deleteMessages={deleteMessages}
			/>

			<SideDrawer
				username="username"
				email="string"
				profileImg="string"
				onModal={openedDrawer}
				setOnModal={onToggleOpenDrawer}
			/>
			{isMoving && <MovingFolderModal isMoving={isMoving} onToggleMovingFolderModal={onToggleMovingFolderModal} />}
			<S.MessageListContainer isEdit={isEdit}>
				{Messages?.responseDto.map((res, idx) => (
					<MessageContent
						key={`message-box-messga${idx}`}
						message={res}
						isEdit={isEdit}
						onToggleCheckMessage={onToggleCheckMessage}
						checkMessages={checkMessages}
					/>
				))}
				{isEdit && (
					<S.BackButtonContainer>
						<S.BackButton onClick={() => setIsEdit(false)}>뒤로가기</S.BackButton>
					</S.BackButtonContainer>
				)}
			</S.MessageListContainer>
		</S.Wrapper>
	);
};

export default MessageBox;
