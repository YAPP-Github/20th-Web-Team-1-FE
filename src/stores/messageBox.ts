import { atom } from 'recoil';
import { MessagesType } from '@/types/message';

export const messagesState = atom<MessagesType | undefined>({
	key: 'messagesState',
	default: undefined,
});
