export const storageAccessKey = 'BETREE_STORAGE_ACCESS_KEY';
export const storageRefreshKey = 'BETREE_STORAGE_REFRESH_KEY';

export const getStorageItem = (key: string, initialValue = '') => {
	try {
		const item = window.localStorage.getItem(key);

		return item ? JSON.parse(item) : initialValue;
	} catch (error) {
		return initialValue;
	}
};

export const setStorageItem = (key: string, value: string) => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorageItem = (key: string) => {
	window.localStorage.removeItem(key);
};
