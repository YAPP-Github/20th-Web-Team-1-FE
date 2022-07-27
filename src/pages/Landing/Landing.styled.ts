import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AppStartContainer = styled.div`
	position: relative;
	max-width: 475px;
	height: 100vh;
	margin-left: calc(55vw - 1px);
	background-color: ${({ theme }) => theme.colors.bt_white};

	@media only screen and (max-width: 1023px) {
		margin: 0 auto;
	}
`;

export const PrimaryLogoWrapper = styled.div`
	margin-bottom: 4.2vh;
	padding-top: 11.1vh;
	text-align: center;
`;

export const PrimaryLogo = styled.img``;

export const AppStartTitleWrapper = styled.div`
	margin-bottom: 4.2vh;
	text-align: center;
`;

export const AppStartTitle = styled.p`
	font-size: 1.9vw;
	font-weight: ${({ theme }) => theme.fontWeight.thin};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const AppStartImojTigle = styled(AppStartTitle)`
	margin-bottom: 1vh;
	font-size: 2.2vw;
`;

export const AppStartTreeImgWrapper = styled.div`
	text-align: center;
	margin-bottom: 3.4vh;
`;

export const AppStartTreeImg = styled.img`
	width: 20vw;
`;

export const AppStartDescWrapper = styled.div`
	margin-bottom: 12vh;
	text-align: center;
`;

export const AppStartDesc = styled.p`
	font-size: 0.98vw;
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: 3vh;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const AppStartButtonWrapper = styled.div``;

export const AppStartButton = styled(Link)`
	display: flex;
	justify-content: center;
	border-radius: 12px;
	margin: 0 2.2vw;
	padding: 20px 0;
	background-color: ${({ theme }) => theme.colors.bt_primary[200]};
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: ${({ theme }) => theme.lineHeight.lh20};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_white};
`;

export const InstagramLinkButtonWrapper = styled.a`
	position: fixed;
	bottom: 80px;
	right: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 9.2vh;
	height: 9.2vh;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.bt_yellow[100]};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

	&:hover {
		opacity: 0.8;
	}

	@media only screen and (max-width: 1500px) {
		display: none;
	}
`;

export const InstagramLinkButtonImg = styled.img`
	width: 5vh;
	height: auto;
`;
