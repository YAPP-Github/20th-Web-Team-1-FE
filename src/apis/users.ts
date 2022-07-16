import { requester } from '@/apis/requester';
import API_URL, { GET, PUT } from '@/constants/api';
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

export const editProfile = async (newNickname: string) => {
	const {
		users: { nickname },
	} = API_URL;

	try {
		const { status } = await requester<UserInfo>({
			method: PUT,
			url: `${nickname}?nickname=${newNickname}`,
		});

		return status;
	} catch (error) {
		// 에러 핸들링
	}
};
