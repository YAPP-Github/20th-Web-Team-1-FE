import React from 'react';
import { Link } from 'react-router-dom';
import EmptyProfileImg from '@/assets/images/layout/empty_profile_img.svg';
import * as S from './Header.styled';

const Header = () => {
	return (
		<S.HeaderWrapper>
			<img src="" alt="로고" />

			<Link to="/mypage">
				<img src={EmptyProfileImg} alt="마이페이지" />
			</Link>
		</S.HeaderWrapper>
	);
};

export default Header;
