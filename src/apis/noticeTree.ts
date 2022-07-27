import API_URL, { GET } from '@/constants/api';

import { requester } from './requester';

interface GetNoticesType {
	messages: [
		{
			anonymous: true;
			content?: 'string';
			id: 0;
			senderNickname: 'string';
			senderProfileImage: 'string';
		},
	];
	totalUnreadMessageCount: 0;
}

export const getNotices = async () => {
	const {
		noticeTree: { index },
	} = API_URL;

	const { payload } = await requester<GetNoticesType>({
		method: GET,
		url: index,
	});

	return payload;
};
