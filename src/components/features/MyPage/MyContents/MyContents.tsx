import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/apis/auth';
import { RESPONSE_SUCCESS_OK } from '@/constants/api';
import * as S from './MyContents.styled';
import { useSetRecoilState } from 'recoil';
import { myInfoState } from '@/stores/user';

const MyContents = () => {
	const setMyInfo = useSetRecoilState(myInfoState);
	const navigate = useNavigate();

	const handleClickLogoutButton = async () => {
		const status = await logout();

		if (status === RESPONSE_SUCCESS_OK) {
			setMyInfo(undefined);
			navigate('/');
		}
	};

	return (
		<S.MyContentsContainer>
			<S.MyMenuLink to="/mypage/edit">프로필 수정하기</S.MyMenuLink>
			<S.MyMenuButton type="button" color="primary">
				Url 주소 복사하기
			</S.MyMenuButton>
			<S.MyMenuButton type="button" color="grey" onClick={handleClickLogoutButton}>
				로그아웃하기
			</S.MyMenuButton>
		</S.MyContentsContainer>
	);
};

export default MyContents;
