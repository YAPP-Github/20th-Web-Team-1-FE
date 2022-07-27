import { getTreeDetail } from '@/apis/forest';
import { errorToastState } from '@/stores/modal';
import { myInfoState } from '@/stores/user';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MessageWithLocationType } from '../NoticeTree/NoticeTree.type';

const useTreeDetail = () => {
	const { treeId } = useParams();

	const myInfo = useRecoilValue(myInfoState);

	const setErrorToastText = useSetRecoilState(errorToastState);

	const userId = myInfo?.id;

	const [treeMessages, setTreeMessages] = useState<MessageWithLocationType[] | null>(null);

	const { data: treeDetailInfo } = useQuery(
		['readTreeDetail', { treeId: treeId, userId: userId }],
		() => getTreeDetail({ treeId: treeId, userId: String(userId) }),
		{
			onSuccess: () => {
				const newMessages = treeDetailInfo?.messages.map((message) => ({
					...message,
					width: Math.floor(Math.random() * 100),
					height: Math.floor(Math.random() * 100),
				}));
				newMessages && setTreeMessages(newMessages);
			},
			onError: () => {
				setErrorToastText('네트워크 오류. 나무 정보를 가져올 수 없습니다.');
			},
			enabled: !!treeId && !!userId,
		},
	);

	return {
		treeId,
		treeMessages,
		treeDetailInfo,
	};
};

export default useTreeDetail;
