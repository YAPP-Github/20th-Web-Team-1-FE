import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0 ,0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0 ,0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0 ,0);
  }

  to {
    opacity: 1;
		transform: translate3d(4vh, 0, 0);
  }
`;

const slideInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px ,0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0 ,0);
  }
`;

export const Container = styled.div`
	position: fixed;
	inset: 0;
	background: linear-gradient(180deg, #c3eaff 0%, #ffffff 100%);

	@media only screen and (max-width: 1200px) {
		background: ${({ theme }) => theme.colors.bt_white};
	}
`;

export const AppDescContainer = styled.div`
	position: fixed;
	inset: 0;
	left: calc(55vw - 60vh);
	max-width: 60vh;

	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;

export const LogoWrapper = styled.div`
	position: absolute;
	top: 8vh;
`;

export const Logo = styled.img`
	width: 27vh;
	object-fit: cover;
`;

export const IntroduceDescWrapper = styled.div`
	position: absolute;
	top: 25vh;
`;

export const IntroduceDescMainText = styled.h2`
	margin-bottom: 28px;
	font-size: 3.7vh;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: 3.7vh;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const IntroduceDescSubText = styled.p`
	font-size: 3vh;
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 3vh;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[100]};
`;

export const IntroduceDescEmphasizedText = styled.strong`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.colors.bt_primary[200]};
`;

export const FadeInCommentList = styled.ul`
	position: absolute;
	top: 42vh;
	display: flex;
	flex-direction: column;
	gap: 3.1vh;
`;

export const FadeInCommentItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;

	opacity: 0;
	&:not(:last-child):nth-of-type(even) {
		align-self: flex-end;
	}

	&:nth-of-type(1) {
		animation: ${slideInLeft} 1s ease forwards;
	}

	&:nth-of-type(2) {
		animation: ${slideInRight} 1s 0.3s ease forwards;
	}

	&:nth-of-type(3) {
		animation: ${slideInLeft} 1s 0.6s ease forwards;
	}

	&:nth-of-type(4) {
		animation: ${slideInBottom} 1s 0.9s ease forwards;
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
	font-size: 1.7vh;
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: 1.7vh;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
	transform: translate3d(-4vh, 0, 0);
	z-index: -1;
`;

export const FadeInCommentSkipWarpper = styled.div`
	text-align: center;
`;

export const CopyrightWrapper = styled.div`
	position: absolute;
	bottom: 7vh;
`;

export const Copyright = styled.p`
	font-size: 1.5vh;
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: ${({ theme }) => theme.lineHeight.lh16};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[40]};
`;

export const InstagramLinkButtonWrapper = styled.a`
	position: fixed;
	bottom: 7vh;
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
