import { atom, selector } from 'recoil';
import { MessagesType } from '@/types/message';

export const messagesState = atom<MessagesType | undefined>({
	key: 'messagesState',
	default: undefined,
});

export const getMessagesSelector = selector({
	key: 'getMessagesSelector',
	get: ({ get }) => {
		const messages = get(messagesState);

		return messages;
	},
});
