import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding: 10vh 0 7vh 0;
`;

export const PrimaryLogoWrapper = styled.div`
	margin-bottom: 4.2vh;
	text-align: center;
`;

export const PrimaryLogo = styled.img``;

export const AppStartTitleWrapper = styled.div`
	margin-bottom: 4.2vh;
	text-align: center;
`;

export const AppStartTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f28};
	font-weight: ${({ theme }) => theme.fontWeight.thin};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const AppStartImojTigle = styled(AppStartTitle)`
	margin-bottom: 1vh;
	font-size: ${({ theme }) => theme.fontSize.f32};
`;

export const AppStartTreeImgWrapper = styled.div`
	text-align: center;
	margin-bottom: 3.4vh;
`;

export const AppStartTreeImg = styled.img`
	width: 90%;
`;

export const AppStartDescWrapper = styled.div`
	text-align: center;
`;

export const AppStartDesc = styled.p`
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
