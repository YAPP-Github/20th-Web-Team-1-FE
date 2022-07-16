import API_URL, { GET } from '@/constants/api';
import { requester } from './requester';
import { Folder } from '@/types/forest';
import { TreeDetailParam, Param, TreeDetail } from '@/types/forest';

export const readUserForest = async (userId: Param) => {
	const {
		forest: { index },
	} = API_URL;

	try {
		const response = await requester<Folder[] | undefined>({
			method: GET,
			url: `${index}?userId=${userId}`,
		});

		return response.payload;
	} catch (error) {
		// 에러 핸들링
	}
};

export const readTreeDetail = async ({ treeId, userId }: TreeDetailParam) => {
	const {
		forest: { index },
	} = API_URL;

	try {
		const response = await requester<TreeDetail | undefined>({
			method: GET,
			url: `${index}/${treeId}?userId=${userId}`,
		});

		return response.payload;
	} catch (error) {
		// 에러 핸들링
	}
};
