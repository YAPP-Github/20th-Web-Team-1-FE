import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding: 10vh 0 7vh 0;
`;

export const LandingLogoWrapper = styled.div`
	margin-bottom: 4.2vh;
	text-align: center;
`;

export const LandingLogo = styled.img``;

export const LandingTitleWrapper = styled.div`
	margin-bottom: 4.2vh;
	text-align: center;
`;

export const LandingTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f28};
	font-weight: ${({ theme }) => theme.fontWeight.thin};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const LandingImojiTitle = styled(LandingTitle)`
	margin-bottom: 1vh;
	font-size: ${({ theme }) => theme.fontSize.f32};
`;

export const LandingImgWrapper = styled.div`
	text-align: center;
	margin-bottom: 3.4vh;
`;

export const LandingImg = styled.img`
	width: 90%;
`;

export const LandingDescWrapper = styled.div`
	text-align: center;
`;

export const LandingDesc = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f14};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: ${({ theme }) => theme.lineHeight.lh24};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const AppStartButtonWrapper = styled.div`
	margin-top: auto;
`;

export const AppStartButton = styled(Link)`
	display: flex;
	justify-content: center;
	border-radius: 12px;
	margin: 0 32px;
	padding: 17px 0;
	background-color: ${({ theme }) => theme.colors.bt_primary[200]};
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: ${({ theme }) => theme.lineHeight.lh16};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_white};
`;
