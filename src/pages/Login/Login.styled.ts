import styled from '@emotion/styled';

export const LoginContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100vh;
	padding: 275px 32px 60px 32px;
`;

export const ServiceInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 30px;

	& > img {
		margin-bottom: 21px;
	}

	& > p {
		font-size: 14px;
		font-weight: ${({ theme }) => theme.fontWeight.light};
		line-height: 23px;
		text-align: center;
	}
`;

export const KakaoLoginButton = styled.button`
	width: 100%;
	background-color: transparent;
	border: none;
	padding: 0;

	& > img {
		width: 100%;
	}
`;
