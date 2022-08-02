import { getStorageItem, storageAccessKey } from '@/utils/local-storage';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
		withCredentials: true,
	});

	base.interceptors.response.use(
		async (response) => {
			const { config, data } = response;

			if (data?.statusCode >= 400 && data?.statusCode < 500) {
				// 토큰 재발급

				return axios(config);
			}

			return response;
		},
		async (error) => {
			const {
				config,
				response: { status },
			} = error;

			if (status >= 400 && status < 500) {
				// 토큰 재발급

				return axios(config);
			}

			return error;
		},
	);

	return base;
};

const axiosInstance = createAxiosInstance();

export async function requester<Payload>(option: AxiosRequestConfig) {
	const accessToken = getStorageItem(storageAccessKey);

	const response: AxiosResponse<Payload> = await axiosInstance(
		accessToken
			? {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
					...option,
			  }
			: {
					...option,
			  },
	);

	return {
		status: response.status,
		headers: response.headers,
		payload: response.data,
	};
}
