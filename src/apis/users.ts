import { requester } from '@/apis/requester';
import API_URL, { GET } from '@/constants/api';
import { UserInfo } from '@/types/user';

export const checkMyInfo = async () => {
	const {
		users: { info },
	} = API_URL;

	try {
		const { payload } = await requester<UserInfo>({
			method: GET,
			url: info,
		});

		return payload;
	} catch (error) {
		// 에러 핸들링
	}
};
