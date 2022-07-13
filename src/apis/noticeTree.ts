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
		noticeTree: { read },
	} = API_URL;
	try {
		const { payload } = await requester<GetNoticesType>({
			method: GET,
			url: read,
		});

		return payload;
	} catch (e) {
		console.log(e);
	}
};
