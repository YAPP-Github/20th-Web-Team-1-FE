import API_URL, { DELETE, GET, POST, PUT } from '@/constants/api';
import { MessageDetailData, MessageIdType, MessagesType, PostMessageData, MessageParams } from '@/types/message';
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
		throw new Error('Failed to delete message!');
	}
};

export const updateReadMessage = async (messageId: MessageIdType) => {
	const {
		messages: { read },
	} = API_URL;

	try {
		const response = await requester<boolean>({
			method: PUT,
			url: `${read}?messageId=${messageId}`,
		});

		return response.payload;
	} catch (error) {
		throw new Error('Failed to update read message!');
	}
};

export const getMessageDetail = async (messageId: MessageIdType) => {
	try {
		const response = await requester<MessageDetailData>({
			method: GET,
			url: `/messages/${messageId}`,
		});

		return response.payload;
	} catch (error) {
		throw new Error('Failed to get message of detail');
	}
};

export const getMessages = async ({ treeId, currentPage }: MessageParams) => {
	const path =
		treeId === 'favorite'
			? `/messages/favorite?page=${currentPage}&size=10`
			: treeId
			? `/messages?page=${currentPage}&size=10&treeId=${treeId}`
			: `/messages?page=${currentPage}&size=10`;

	try {
		const response = await requester<MessagesType>({
			method: GET,
			url: path,
		});

		return response.payload;
	} catch (error) {
		throw new Error(`Failed to get messages of ${treeId ? treeId : 'myMessageFolder'}`);
	}
};

export const updateOpenMessages = async (messageIds: MessageIdType[]) => {
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
		throw new Error('Failed to open messages');
	}
};

export const updateMovingMessages = async ({ messageIds, treeId }: { messageIds: number[]; treeId: number }) => {
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
		throw new Error('Failed to move messages to another folder');
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
		throw new Error('Failed to send message');
	}
};

export const updateFavoriteMessage = async (messageId: MessageIdType) => {
	const {
		messages: { favorite },
	} = API_URL;

	try {
		const { status } = await requester({
			method: PUT,
			url: `${favorite}?messageId=${messageId}`,
		});

		return status;
	} catch (error) {
		throw new Error('Failed to update read message!');
	}
};
