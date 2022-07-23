import { getTreeDetail } from '@/apis/forest';
import { myInfoState } from '@/stores/user';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { MessageWithLocationType } from '../NoticeTree/NoticeTree.type';

const useTreeDetail = () => {
	const { treeId } = useParams();

	const myInfo = useRecoilValue(myInfoState);

	const userId = myInfo?.id;

	const [treeMessages, setTreeMessages] = useState<MessageWithLocationType[] | null>(null);

	const { data: treeDetailInfo } = useQuery(
		['readTreeDetail', { treeId: treeId, userId: userId }],
		() => getTreeDetail({ treeId: treeId, userId: String(userId) }),
		{ enabled: !!treeId && !!userId },
	);

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
	};
};

export default useTreeDetail;
