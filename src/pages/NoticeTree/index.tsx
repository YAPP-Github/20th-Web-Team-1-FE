import React, { useState, useEffect } from 'react';
import { AlertPopUp, Clouds, Tree, MessageBox, WateringButton } from '@/components/features/NoticeTree';
import { MessageWithLocationType } from './NoticeTree.type';
import * as S from './NoticeTree.styled';
import useNoticeMessages from './useNoticeMessages';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';
import { readMessage } from '@/apis/messages';

const NoticeTree = () => {
	const { noticeMessages, setNoticeMessages, totalUnreadMessageCount, setTotalUnreadMessageCount } =
		useNoticeMessages();

	const myInfo = useRecoilValue(myInfoState);

	const username = myInfo ? myInfo.nickname : '';

	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageWithLocationType | null>(null);
	const [showAlertMessage, setShowAlertMessage] = useState(true);
	const [activeHomeAlert, setActiveHomeAlert] = useState(false);

	const readNoticeMessage = (messageId: number, selectedIdx: number) => {
		if (noticeMessages) {
			if (messageId > 0) {
				setTotalUnreadMessageCount((prev) => prev - 1);
				readMessage(messageId);
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
				<Tree readNoticeMessage={readNoticeMessage} messages={noticeMessages ? noticeMessages : null} />
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
