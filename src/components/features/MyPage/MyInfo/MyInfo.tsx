import React from 'react';
import * as S from './MyInfo.styled';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';

const MyInfo = () => {
	const myInfo = useRecoilValue(myInfoState);

	return (
		<S.MyInfoContainer>
			<img src={`${import.meta.env.VITE_API_BASE_URL}/${myInfo?.userImage}`} alt="" />
			<p>{myInfo?.nickname}</p>
			<p>{myInfo?.email}</p>
		</S.MyInfoContainer>
	);
};

export default MyInfo;
