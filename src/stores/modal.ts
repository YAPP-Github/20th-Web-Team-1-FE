import { atom } from 'recoil';

export const smallModalState = atom<string | undefined>({
	key: 'smallModalState',
	default: undefined,
});

export const errorToastState = atom<string | undefined>({
	key: 'errorToastState',
	default: undefined,
});
