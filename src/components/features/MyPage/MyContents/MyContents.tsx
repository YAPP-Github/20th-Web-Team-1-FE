import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/apis/auth';
import * as S from './MyContents.styled';
import { useRecoilState } from 'recoil';
import { myInfoState } from '@/stores/user';
import { useMutation } from 'react-query';
import { AlertModal } from '@/components/shared';
import LogoutModalImg from '@/assets/images/mypage/logout_bee_img@2x.png';
import Toast from '@/components/shared/Toast';

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

	const DOMAIN_URL = import.meta.env.DEV ? 'http://localhost:3000' : 'https://www.betree.site';

	const handleCopyUrlToClipBoard = async () => {
		await navigator.clipboard.writeText(`${DOMAIN_URL}/forest/${myInfo?.id}`);
		setIsToastVisible(true);
	};

	const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
	const [isToastVisible, setIsToastVisible] = useState(false);

	return (
		<>
			<S.MyContentsContainer>
				<S.MyMenuLink to="/mypage/edit">프로필 수정하기</S.MyMenuLink>
				<S.MyMenuButton type="button" color="primary" onClick={handleCopyUrlToClipBoard}>
					Url 주소 복사하기
				</S.MyMenuButton>
				<S.MyMenuButton type="button" color="grey" onClick={() => setIsLogoutModalVisible(true)}>
					로그아웃하기
				</S.MyMenuButton>
			</S.MyContentsContainer>
			{isLogoutModalVisible && (
				<AlertModal
					isOpen={isLogoutModalVisible}
					modalMainImage={LogoutModalImg}
					buttonTitle="로그아웃하기"
					modalDescMessages={['로그아웃하시겠습니까?', '곧 다시 만나요...!']}
					handleCloseBtnClick={() => setIsLogoutModalVisible(false)}
					handleMainBtnClick={handleClickLogoutButton}
				/>
			)}
			<Toast show={isToastVisible} message="복사되었습니다!" onClose={() => setIsToastVisible(false)} />
		</>
	);
};

export default MyContents;
