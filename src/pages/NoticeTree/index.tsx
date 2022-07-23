import { updateReadMessage } from '@/apis/messages';
import { AlertPopUp, Clouds, MessageBox, Tree, WateringButton } from '@/components/features/NoticeTree';
import { myInfoState } from '@/stores/user';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './NoticeTree.styled';
import { MessageWithLocationType } from './NoticeTree.type';
import useNoticeMessages from './useNoticeMessages';

const NoticeTree = () => {
	const { noticeMessages, setNoticeMessages, totalUnreadMessageCount, setTotalUnreadMessageCount } =
		useNoticeMessages();

	const myInfo = useRecoilValue(myInfoState);

	const username = myInfo ? myInfo.nickname : '';

	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageWithLocationType | null>(null);
	const [showAlertMessage, setShowAlertMessage] = useState(true);
	const [activeHomeAlert, setActiveHomeAlert] = useState(false);

	const updateReadMessageHandler = async (messageId: number, selectedIdx: number) => {
		if (noticeMessages) {
			if (messageId > 0) {
				const isRead = await updateReadMessage(messageId);
				isRead && setTotalUnreadMessageCount((prev) => prev - 1);
			}

			showMessageHandler(true);
			setSelectedMessage(noticeMessages[selectedIdx]);

			const data = [...noticeMessages].filter((arr, idx) => {
				return idx !== selectedIdx;
			});
			setNoticeMessages(data);
		}
	};

	const showMessageHandler = (show: boolean) => {
		setShowMessage(show);
	};

	useEffect(() => {
		setTimeout(() => setShowAlertMessage(false), 3000);
	}, []);

	useEffect(() => {
		if (noticeMessages?.length === 0) {
			setActiveHomeAlert(true);
			setShowAlertMessage(true);
			const closeAlertTimer = setTimeout(() => {
				setShowAlertMessage(false);
			}, 3000);
			return () => {
				clearTimeout(closeAlertTimer);
			};
		}
	}, [noticeMessages]);

	return (
		<>
			<S.TemporaryWrapper>
				<Clouds />
				<S.NoticeTextWrapper>
					<S.NoticeMainText>
						{username}의 알림나무<span>읽지 않은 열매 {totalUnreadMessageCount} </span>
					</S.NoticeMainText>
				</S.NoticeTextWrapper>
				<Tree updateReadMessageHandler={updateReadMessageHandler} messages={noticeMessages ? noticeMessages : null} />
				<AlertPopUp
					username={username}
					messageCount={totalUnreadMessageCount}
					showAlertMessage={showAlertMessage}
					activeHomeAlert={activeHomeAlert}
				/>
				{showMessage && <MessageBox selectedMessage={selectedMessage} showMessageHandler={showMessageHandler} />}
				<WateringButton />
			</S.TemporaryWrapper>
		</>
	);
};

export default NoticeTree;
