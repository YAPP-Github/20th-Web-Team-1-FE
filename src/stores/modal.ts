import { atom } from 'recoil';

export const smallModalState = atom<string | undefined>({
	key: 'smallModalState',
	default: undefined,
});
