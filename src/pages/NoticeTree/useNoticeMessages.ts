import { useCallback, useState, useEffect } from 'react';
import { getNotices } from '@/apis/noticeTree';
import { MessageWithLocationType } from './NoticeTree.type';

const useNoticeMessages = () => {
	const [noticeMessages, setNoticeMessages] = useState<MessageWithLocationType[] | null>(null);
	const [totalUnreadMessageCount, setTotalUnreadMessageCount] = useState<number>(0);

	const getNoticeMessages = useCallback(async () => {
		const defaultNotices = await getNotices();
		if (defaultNotices !== undefined) {
			const newNoticeMessages = defaultNotices.messages.map((message) => ({
				...message,
				width: Math.floor(Math.random() * 100),
				height: Math.floor(Math.random() * 100),
			}));
			setNoticeMessages(newNoticeMessages);
			setTotalUnreadMessageCount(defaultNotices.totalUnreadMessageCount);
		}
	}, []);

	useEffect(() => {
		getNoticeMessages();
	}, [getNoticeMessages]);

	return { noticeMessages, setNoticeMessages, totalUnreadMessageCount, setTotalUnreadMessageCount };
};

export default useNoticeMessages;
