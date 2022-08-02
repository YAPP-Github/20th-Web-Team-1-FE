import KakaoLogin from '@/assets/images/login/kakao_login_large_wide@2x.png';
import BigTreeLogo from '@/assets/images/shared/big_tree_logo.svg';
import { Layout } from '@/components/layout';
import React from 'react';
import * as S from './Login.styled';
import useLogin from './useLogin';

const Login = () => {
	const handleClickLoginButton = useLogin();

	return (
		<Layout path="public">
			<S.LoginContainer>
				<S.ServiceInfo>
					<img src={BigTreeLogo} alt="" />
					<p>칭찬 공유</p>
					<p>아카이브 서비스, Betree</p>
				</S.ServiceInfo>

				<S.KakaoLoginButton type="button" onClick={handleClickLoginButton}>
					<img src={KakaoLogin} alt="카카오로 시작하기" />
				</S.KakaoLoginButton>
			</S.LoginContainer>
		</Layout>
	);
};

export default Login;
