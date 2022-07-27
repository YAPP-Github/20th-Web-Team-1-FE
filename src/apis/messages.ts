import API_URL, { DELETE, GET, POST, PUT } from '@/constants/api';
import { MessageDetailData, MessageIdType, MessagesType, PostMessageData, MessageParams } from '@/types/message';
import { requester } from './requester';

export const deleteMessage = async (messageIds: MessageIdType[]) => {
	const {
		messages: { index },
	} = API_URL;

	const data = messageIds;

	const { status } = await requester({
		method: DELETE,
		url: index,
		data,
	});

	return status;
};

export const updateReadMessage = async (messageId: MessageIdType) => {
	const {
		messages: { read },
	} = API_URL;

	const response = await requester<boolean>({
		method: PUT,
		url: `${read}?messageId=${messageId}`,
	});

	return response.payload;
};

export const getMessageDetail = async (messageId: MessageIdType) => {
	const response = await requester<MessageDetailData>({
		method: GET,
		url: `/messages/${messageId}`,
	});

	return response.payload;
};

export const getMessages = async ({ treeId, currentPage }: MessageParams) => {
	const path =
		treeId === 'favorite'
			? `/messages/favorite?page=${currentPage}&size=10`
			: treeId
			? `/messages?page=${currentPage}&size=10&treeId=${treeId}`
			: `/messages?page=${currentPage}&size=10`;

	const response = await requester<MessagesType>({
		method: GET,
		url: path,
	});

	return response.payload;
};

export const updateOpenMessages = async (messageIds: MessageIdType[]) => {
	const {
		messages: { opening },
	} = API_URL;

	const data = messageIds;

	const { status } = await requester({
		method: PUT,
		url: opening,
		data,
	});

	return status;
};

export const updateMovingMessages = async ({ messageIds, treeId }: { messageIds: number[]; treeId: number }) => {
	const {
		messages: { folder },
	} = API_URL;

	const data = messageIds;

	const { status } = await requester({
		method: PUT,
		url: `${folder}?treeId=${treeId}`,
		data,
	});

	return status;
};

export const postMessages = async (postMessageData: PostMessageData) => {
	const {
		messages: { index },
	} = API_URL;

	const data = postMessageData;

	const { status } = await requester({
		method: POST,
		url: index,
		data,
	});

	return status;
};

export const updateFavoriteMessage = async (messageId: MessageIdType) => {
	const {
		messages: { favorite },
	} = API_URL;

	const { status } = await requester({
		method: PUT,
		url: `${favorite}?messageId=${messageId}`,
	});

	return status;
};
