import React, { useState, useEffect } from 'react';
import { AlertPopUp, Clouds, Tree, MessageBox, WateringButton } from '@/components/features/NoticeTree';
import { MessagesType, MessageType } from './index.type';
import * as S from './index.styled';

const NoticeTree = () => {
	const username = '황재원';
	const messageCount = 8;

	const [leftFruit, setLeftFruit] = useState(messageCount);

	const [messages, setMessages] = useState<MessagesType | null>(null);
	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageType | null>(null);

	const [showAlertMessage, setShowAlertMessage] = useState(true);

	const removeFruit = (selectedIdx: number) => {
		if (messages) {
			showMessageHandler(true);
			setSelectedMessage(messages[selectedIdx]);
			const data = [...messages].filter((arr, idx) => {
				return idx !== selectedIdx;
			});
			setMessages(data);
			setLeftFruit((prev) => prev - 1);
		}
	};

	const showMessageHandler = (show: boolean) => {
		setShowMessage(show);
	};

	useEffect(() => {
		const data = Array(8)
			.fill(0)
			.map((arr, idx) => {
				return {
					id: `message${idx}`,
					message: `이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다이것은 betree message ${idx}입니다`,
					writer: null,
					width: Math.floor(Math.random() * 100),
					height: Math.floor(Math.random() * 100),
				};
			});
		setMessages(data);
	}, []);

	useEffect(() => {
		setTimeout(() => setShowAlertMessage(false), 3000);
	}, []);

	return (
		<>
			<S.TemporaryWrapper>
				<Clouds />
				<S.NoticeTextWrapper>
					<S.NoticeMainText>
						{username}의 알림나무<span>읽지 않은 열매 {leftFruit} </span>
					</S.NoticeMainText>
				</S.NoticeTextWrapper>
				<Tree removeFruit={removeFruit} messages={messages} />
				<AlertPopUp username={username} messageCount={messageCount} showAlertMessage={showAlertMessage} />
				{showMessage && <MessageBox selectedMessage={selectedMessage} showMessageHandler={showMessageHandler} />}
				<WateringButton />
			</S.TemporaryWrapper>
		</>
	);
};

export default NoticeTree;
