import { useState, useEffect } from 'react';

import { myInfoState } from '@/stores/user';
import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
import { readTreeDetail } from '@/apis/forest';
import { useNavigate, useParams } from 'react-router-dom';
import { MessageWithLocationType } from '../NoticeTree/NoticeTree.type';
import { readMessage } from '@/apis/messages';
const useTreeDetail = () => {
	const { treeId } = useParams();

	const navigate = useNavigate();

	const myInfo = useRecoilValue(myInfoState);

	const userId = myInfo?.id;

	const [treeMessages, setTreeMessages] = useState<MessageWithLocationType[] | null>(null);
	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageWithLocationType | null>(null);

	const { data: treeDetailInfo } = useQuery(
		['readTreeDetail', { treeId: treeId, userId: userId }],
		() => readTreeDetail({ treeId: treeId, userId: String(userId) }),
		{ enabled: !!treeId && !!userId },
	);

	const readTreeMessage = (messageId: number, selectedIdx: number) => {
		if (treeMessages) {
			readMessage(messageId);
			setShowMessage(true);

			setSelectedMessage(treeMessages[selectedIdx]);
		}
	};

	const moveTree = (nextTree: number | undefined) => {
		setShowMessage(false);
		navigate(`/forest/${nextTree}`);
	};

	useEffect(() => {
		if (treeDetailInfo !== undefined) {
			const newMessages = treeDetailInfo?.messages.map((message) => ({
				...message,
				width: Math.floor(Math.random() * 100),
				height: Math.floor(Math.random() * 100),
			}));
			setTreeMessages(newMessages);
		}
	}, [treeDetailInfo]);
	return {
		treeId,
		treeMessages,
		treeDetailInfo,
		readTreeMessage,
		moveTree,
		showMessage,
		selectedMessage,
		setShowMessage,
	};
};

export default useTreeDetail;
