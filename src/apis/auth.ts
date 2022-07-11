import API_URL, { POST } from '@/constants/api';
import { setStorageItem, storageAccessKey } from '@/utils/local-storage';
import { requester } from './requester';

export const login = async (kakaoAccessToken: string) => {
	const {
		auth: { signin },
	} = API_URL;

	try {
		const { headers, status } = await requester({
			method: POST,
			url: signin,
			headers: {
				'X-Kakao-Access-Token': kakaoAccessToken,
			},
		});

		const betreeAccessToken = headers.authorization.split(' ')[1];

		setStorageItem(storageAccessKey, betreeAccessToken);

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};
