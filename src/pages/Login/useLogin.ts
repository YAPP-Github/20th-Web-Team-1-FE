import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '@/apis/auth';
import { RESPONSE_SUCCESS_CREATED } from '@/constants/api';

const useLogin = () => {
	const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
		import.meta.env.VITE_REST_API_KEY
	}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

	const handleClickLoginButton = () => {
		window.location.href = KAKAO_LOGIN_URL;
	};

	const getKakaoAccessToken = async (kakaoCode: string) => {
		const data: {
			[key: string]: string;
		} = {
			grant_type: 'authorization_code',
			client_id: import.meta.env.VITE_REST_API_KEY,
			redirect_uri: import.meta.env.VITE_REDIRECT_URI,
			code: kakaoCode,
		};

		const qsData = Object.keys(data)
			.map((k) => encodeURIComponent(k) + '=' + encodeURI(data[k]))
			.join('&');

		const response = await axios.post('https://kauth.kakao.com/oauth/token', qsData, {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
		});

		const kakaoAccessToken = await response.data.access_token;

		return kakaoAccessToken;
	};

	const location = useLocation();

	const navigate = useNavigate();

	const handlelogin = useCallback(async () => {
		const kakaoCode = location.search.split('=')[1];

		if (!kakaoCode) return;

		const kakaoAccessToken = await getKakaoAccessToken(kakaoCode);

		const status = await login(kakaoAccessToken);

		if (status === RESPONSE_SUCCESS_CREATED) {
			navigate('/');
		}
	}, [location, navigate]);

	useEffect(() => {
		handlelogin();
	}, [handlelogin]);

	return handleClickLoginButton;
};

export default useLogin;
