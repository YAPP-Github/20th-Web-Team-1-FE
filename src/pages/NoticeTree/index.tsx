import { updateReadMessage } from '@/apis/messages';
import { getNotices } from '@/apis/noticeTree';
import NoMessageIcon from '@/assets/images/noticeTree/no_message.svg';
import { AlertPopUp, Clouds, MessageBox, Tree, WateringButton } from '@/components/features/NoticeTree';
import { MediumAlertModal } from '@/components/shared';
import { myInfoState } from '@/stores/user';
import withAuth from '@/utils/HOC/withAuth';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './NoticeTree.styled';
import { MessageWithLocationType } from './NoticeTree.type';

const NoticeTree = () => {
	const myInfo = useRecoilValue(myInfoState);

	const username = myInfo ? myInfo.nickname : '';

	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageWithLocationType | null>(null);
	const [showAlertMessage, setShowAlertMessage] = useState(true);
	const [activeHomeAlert, setActiveHomeAlert] = useState(false);
	const [noticeMessages, setNoticeMessages] = useState<MessageWithLocationType[] | null>(null);
	const [totalUnreadMessageCount, setTotalUnreadMessageCount] = useState<number>(0);
	const [onAlertModal, setOnAlertModal] = useState(false);
	const [unreadCount, setUnreadCount] = useState(totalUnreadMessageCount);

	const modalHandler = () => {
		setOnAlertModal(!onAlertModal);
	};

	const getNoticeMessages = useCallback(async () => {
		const defaultNotices = await getNotices();
		if (defaultNotices !== undefined) {
			const newNoticeMessages = defaultNotices.messages.map((message, idx) => ({
				...message,
				width: Math.floor(Math.random() * 100),
				height: Math.floor(Math.random() * 100),
				messageIndex: idx + 1,
			}));
			setNoticeMessages(newNoticeMessages);
			setTotalUnreadMessageCount(defaultNotices.totalUnreadMessageCount);
		} else {
			modalHandler();
		}
	}, []);

	const updateReadMessageHandler = async (messageId: number, selectedIdx: number) => {
		if (noticeMessages) {
			if (messageId > 0) {
				const isRead = await updateReadMessage(messageId);

				!isRead && setUnreadCount((prev) => prev - 1);
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
		getNoticeMessages();
	}, [getNoticeMessages]);

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
						{username}의 알림나무<span>읽지 않은 열매 {unreadCount} </span>
					</S.NoticeMainText>
				</S.NoticeTextWrapper>
				<Tree updateReadMessageHandler={updateReadMessageHandler} messages={noticeMessages ? noticeMessages : null} />
				<AlertPopUp
					username={username}
					messageCount={unreadCount}
					showAlertMessage={showAlertMessage}
					activeHomeAlert={activeHomeAlert}
				/>
				{showMessage && <MessageBox selectedMessage={selectedMessage} showMessageHandler={showMessageHandler} />}
				<WateringButton />
			</S.TemporaryWrapper>
			{onAlertModal && (
				<MediumAlertModal
					image={NoMessageIcon}
					contents={['새롭게 도착한 메시지가 없습니다.']}
					modalHandler={modalHandler}
					buttonText="닫기"
				/>
			)}
		</>
	);
};

export default withAuth(NoticeTree);
