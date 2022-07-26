import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/apis/auth';
import * as S from './MyContents.styled';
import { useRecoilState } from 'recoil';
import { myInfoState } from '@/stores/user';
import { useMutation } from 'react-query';

const MyContents = () => {
	const [myInfo, setMyInfo] = useRecoilState(myInfoState);
	const navigate = useNavigate();

	const { mutate: logoutMutation } = useMutation('logout', logout, {
		onSuccess: () => {
			setMyInfo(undefined);
			navigate('/');
		},
	});

	const handleClickLogoutButton = () => {
		logoutMutation();
	};

	const DOMAIN_URL = import.meta.env.DEV ? 'http://localhost:3000' : 'https://www.betree.shop';

	const handleCopyUrlToClipBoard = async () => {
		await navigator.clipboard.writeText(`${DOMAIN_URL}/forest/${myInfo?.id}`);
	};

	return (
		<S.MyContentsContainer>
			<S.MyMenuLink to="/mypage/edit">프로필 수정하기</S.MyMenuLink>
			<S.MyMenuButton type="button" color="primary" onClick={handleCopyUrlToClipBoard}>
				Url 주소 복사하기
			</S.MyMenuButton>
			<S.MyMenuButton type="button" color="grey" onClick={handleClickLogoutButton}>
				로그아웃하기
			</S.MyMenuButton>
		</S.MyContentsContainer>
	);
};

export default MyContents;
