import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	position: fixed;
	inset: 0;
	background: linear-gradient(180deg, #c3eaff 0%, #ffffff 100%);
`;

export const AppDescContainer = styled.div`
	position: fixed;
	inset: 0;
	left: calc(50vw - 40vw);
	max-width: 40vw;
`;

export const LogoWrapper = styled.div`
	position: absolute;
	top: 8vh;
`;

export const Logo = styled.img`
	width: 15.5vw;
	object-fit: cover;
`;

export const IntroduceDescWrapper = styled.div`
	position: absolute;
	top: 30vh;
`;

export const IntroduceDescMainText = styled.h2`
	margin-bottom: 28px;
	font-size: 2.1vw;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: 2.1vw;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const IntroduceDescSubText = styled.p`
	font-size: 1.7vw;
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 1.7vw;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[100]};
`;

export const IntroduceDescEmphasizedText = styled.strong`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.colors.bt_primary[200]};
`;

export const FadeInCommentList = styled.ul`
	position: absolute;
	top: 50vh;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const FadeInCommentItem = styled.li`
	display: flex;
	align-items: center;

	&:nth-of-type(even) {
		align-self: flex-end;
	}
`;

export const FadeInCommentItemImg = styled.img`
	width: 7.2vh;
`;

export const FadeInCommentItemText = styled.p`
	padding: 2.3vh 4.6vh;
	border-radius: 35.5px;
	background-color: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 15.1515px rgba(79, 181, 255, 0.12);
	font-size: 1.15vw;
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: 1.15vw;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
	transform: translate3d(-2.2vw, 0, 0);
	z-index: -1;
`;

export const CopyrightWrapper = styled.div`
	position: absolute;
	bottom: 80px;
`;

export const Copyright = styled.p`
	font-size: 0.85vw;
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: ${({ theme }) => theme.lineHeight.lh16};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[40]};
`;

export const AppStartContainer = styled.div`
	position: relative;
	max-width: 475px;
	height: 100vh;
	margin-left: calc(55vw);
	background-color: ${({ theme }) => theme.colors.bt_white};
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
`;

export const InstagramLinkButtonImg = styled.img`
	width: 5vh;
	height: auto;
`;
