import API_URL, { DELETE, GET, POST, PUT } from '@/constants/api';
import { ForestTrees, TreeDetail, TreeDetailParam } from '@/types/forest';
import { requester } from './requester';

export const postTree = async ({ name, fruitType }: { name: string; fruitType?: string }) => {
	const {
		forest: { index },
	} = API_URL;

	try {
		const data = { name, fruitType };

		const { status } = await requester({
			method: POST,
			url: index,
			data,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const getForest = async (userId?: string | number | undefined) => {
	const {
		forest: { index },
	} = API_URL;

	const response = await requester<ForestTrees>({
		method: GET,
		url: `${index}?userId=${userId}`,
	});

	return response.payload;
};

export const updateTree = async ({ treeId, name, fruitType }: { treeId: number; name: string; fruitType?: string }) => {
	const {
		forest: { index },
	} = API_URL;

	try {
		const data = { name, fruitType };

		const { status } = await requester({
			method: PUT,
			url: `${index}/${treeId}`,
			data,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const deleteTree = async (treeId: number | undefined) => {
	const {
		forest: { index },
	} = API_URL;

	try {
		const { status } = await requester({
			method: DELETE,
			url: `${index}/${treeId}`,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};

export const getTreeDetail = async ({ treeId, userId }: TreeDetailParam) => {
	const {
		forest: { index },
	} = API_URL;

	const response = await requester<TreeDetail | undefined>({
		method: GET,
		url: `${index}/${treeId}?userId=${userId}`,
	});

	return response.payload;
};
