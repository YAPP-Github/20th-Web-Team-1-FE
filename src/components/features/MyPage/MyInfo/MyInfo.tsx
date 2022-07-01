import React from 'react';
import ProfileBeeImg from '@/assets/images/mypage/profile_bee_img@2x.png';
import * as S from './MyInfo.styled';

const MyInfo = () => {
	return (
		<S.MyInfoContainer>
			<img src={ProfileBeeImg} alt="" />
			<p>닉네임</p>
			<p>abc@gmail.com</p>
		</S.MyInfoContainer>
	);
};

export default MyInfo;
