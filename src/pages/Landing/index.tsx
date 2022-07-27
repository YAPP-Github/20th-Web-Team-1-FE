import React, { useEffect } from 'react';
import * as S from './Landing.styled';
import PrimaryLogoIcon from '@/assets/images/layout/betree_logo.svg';
import LandingTreeImg from '@/assets/images/landing/landing_tree.png';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
	const userInfo = useRecoilValue(myInfoState);
	const navigator = useNavigate();

	useEffect(() => {
		if (userInfo) {
			navigator('/main-tree');
		}
	}, [userInfo, navigator]);

	return (
		<S.Container>
			<S.LandingLogoWrapper>
				<S.LandingLogo src={PrimaryLogoIcon} alt="" />
			</S.LandingLogoWrapper>

			<S.LandingTitleWrapper>
				<S.LandingImojiTitle>잘한다👏 자란다🌳</S.LandingImojiTitle>
				<S.LandingTitle>자존감이 자라는 곳</S.LandingTitle>
			</S.LandingTitleWrapper>

			<S.LandingImgWrapper>
				<S.LandingImg src={LandingTreeImg} alt="" />
			</S.LandingImgWrapper>

			<S.LandingDescWrapper>
				<S.LandingDesc>칭찬의 장벽을 낮추고, 자존감을 높이는 Betree입니다.</S.LandingDesc>
				<S.LandingDesc>칭찬하고 칭찬 받으며 나만의 따뜻한 나무숲을 가꾸세요!</S.LandingDesc>
			</S.LandingDescWrapper>

			<S.AppStartButtonWrapper>
				<S.AppStartButton to="/main-tree">Betree 시작하기</S.AppStartButton>
			</S.AppStartButtonWrapper>
		</S.Container>
	);
};

export default Landing;
