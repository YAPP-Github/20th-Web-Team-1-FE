import React from 'react';
import ProfileBeeImg from '@/assets/images/mypage/profile_bee_img@2x.png';
import * as S from './MyInfo.styled';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';

const MyInfo = () => {
	const myInfo = useRecoilValue(myInfoState);

	return (
		<S.MyInfoContainer>
			<img src={myInfo?.userImage || ProfileBeeImg} alt="" />
			<p>{myInfo?.nickname}</p>
			<p>{myInfo?.email}</p>
		</S.MyInfoContainer>
	);
};

export default MyInfo;
