import API_URL, { DELETE, GET, POST, PUT } from '@/constants/api';
import { MessageDetailData, MessageIdType, MessagesType, PostMessageData } from '@/types/message';
import { requester } from './requester';

export const deleteMessage = async (messageIds: MessageIdType[]) => {
	const {
		messages: { index },
	} = API_URL;

	try {
		const data = messageIds;

		const { status } = await requester({
			method: DELETE,
			url: index,
			data,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const readMessage = async (messageId: MessageIdType) => {
	const {
		messages: { read },
	} = API_URL;

	try {
		const { status } = await requester({
			method: PUT,
			url: `${read}?messageId=${messageId}`,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const messageDetailFetcher = async (messageId: MessageIdType) => {
	const response = await requester<MessageDetailData>({
		method: GET,
		url: `/messages/${messageId}`,
	});

	return response.payload;
};

export const getMessages = async (treeId: MessageIdType) => {
	const response = await requester<MessagesType>({
		method: GET,
		url: treeId ? `/messages?treeId=${treeId}` : '/messages',
	});

	return response.payload;
};

export const openMessages = async (messageIds: MessageIdType[]) => {
	const {
		messages: { opening },
	} = API_URL;

	try {
		const data = messageIds;

		const { status } = await requester({
			method: PUT,
			url: opening,
			data,
		});
		if (status === 204) {
			window.alert('열매맺기에 성공했습니다.');
		}
		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const moveMessages = async ({ messageIds, treeId }: { messageIds: number[]; treeId: number }) => {
	const {
		messages: { folder },
	} = API_URL;

	try {
		const data = messageIds;

		const { status } = await requester({
			method: PUT,
			url: `${folder}?treeId=${treeId}`,
			data,
		});

		if (status === 204) {
			window.alert('이동에 성공했습니다.');
		}
		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const postMessages = async (postMessageData: PostMessageData) => {
	const {
		messages: { index },
	} = API_URL;

	try {
		const data = postMessageData;

		const { status } = await requester({
			method: POST,
			url: index,
			data,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
		throw new Error('메시지 전송을 실패 !');
	}
};
