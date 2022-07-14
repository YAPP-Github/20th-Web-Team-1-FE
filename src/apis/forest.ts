import API_URL, { GET } from '@/constants/api';
import { requester } from './requester';
import { FolderType } from '@/types/forest';

export const readUserForest = async (userId: number | undefined) => {
	const {
		forest: { index },
	} = API_URL;

	try {
		const response = await requester<FolderType[] | undefined>({
			method: GET,
			url: `${index}?userId=${userId}`,
		});

		return response.payload;
	} catch (error) {
		// 에러 핸들링
	}
};
