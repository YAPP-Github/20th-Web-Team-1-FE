import { UserInfo } from '@/types/user';
import { atom } from 'recoil';

export const myInfoState = atom<UserInfo | undefined>({
	key: 'myInfo',
	default: undefined,
});
