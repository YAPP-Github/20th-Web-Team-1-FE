import React from 'react';
import * as S from './Landing.styled';
import LogoIcon from '@/assets/images/landing/landing_logo.svg';
import PrimaryLogoIcon from '@/assets/images/layout/betree_logo.svg';
import BeeIcon from '@/assets/images/shared/bee.svg';
import LandingTreeImg from '@/assets/images/landing/landing_tree.png';
import InstagramIcon from '@/assets/images/landing/instagram.png';

const comments = [
	{
		id: 0,
		text: '내일 면접! 난 열심히 준비했으니 잘할 수 있어. 난 날 믿어!',
	},
	{
		id: 1,
		text: '이번 달 목표, 매일 일기 쓰기! 내가 해냄!!!',
	},
	{
		id: 2,
		text: '내 매력은 비행기야. 타고남!!! ㅎㅎ',
	},
];

const INSTAGRAM_URL = 'https://instagram.com/betree_official?igshid=YmMyMTA2M2Y=';

const Landing = () => {
	return (
		<S.Container>
			<S.AppDescContainer>
				<S.LogoWrapper>
					<S.Logo src={LogoIcon} alt="Betree Logo" />
				</S.LogoWrapper>

				<S.IntroduceDescWrapper>
					<S.IntroduceDescMainText>칭찬 공유와 아카이브가 가능한 플랫폼</S.IntroduceDescMainText>
					<S.IntroduceDescSubText>
						잘한다, 자란다 <S.IntroduceDescEmphasizedText>Betree</S.IntroduceDescEmphasizedText>
					</S.IntroduceDescSubText>
				</S.IntroduceDescWrapper>

				<S.FadeInCommentList>
					{comments.map((comment) => {
						return (
							<S.FadeInCommentItem key={comment?.id}>
								<S.FadeInCommentItemImg src={BeeIcon} alt="" />
								<S.FadeInCommentItemText>{comment?.text}</S.FadeInCommentItemText>
							</S.FadeInCommentItem>
						);
					})}
				</S.FadeInCommentList>
				<S.CopyrightWrapper>
					<S.Copyright>Copyright &copy; Betree All rights reserved</S.Copyright>
				</S.CopyrightWrapper>
			</S.AppDescContainer>

			<S.AppStartContainer>
				<S.PrimaryLogoWrapper>
					<S.PrimaryLogo src={PrimaryLogoIcon} alt="" />
				</S.PrimaryLogoWrapper>

				<S.AppStartTitleWrapper>
					<S.AppStartImojTigle>잘한다👏 자란다🌳</S.AppStartImojTigle>
					<S.AppStartTitle>자존감이 자라는 곳</S.AppStartTitle>
				</S.AppStartTitleWrapper>

				<S.AppStartTreeImgWrapper>
					<S.AppStartTreeImg src={LandingTreeImg} alt="" />
				</S.AppStartTreeImgWrapper>

				<S.AppStartDescWrapper>
					<S.AppStartDesc>칭찬의 장벽을 낮추고, 자존감을 높이는 Betree입니다.</S.AppStartDesc>
					<S.AppStartDesc>칭찬하고 칭찬 받으며 나만의 따뜻한 나무숲을 가꾸세요!</S.AppStartDesc>
				</S.AppStartDescWrapper>

				<S.AppStartButtonWrapper>
					<S.AppStartButton to="/notice-tree">Betree 시작하기</S.AppStartButton>
				</S.AppStartButtonWrapper>
			</S.AppStartContainer>

			<S.InstagramLinkButtonWrapper href={INSTAGRAM_URL} target="_blank">
				<S.InstagramLinkButtonImg src={InstagramIcon} alt="Instagram" />
			</S.InstagramLinkButtonWrapper>
		</S.Container>
	);
};

export default Landing;
