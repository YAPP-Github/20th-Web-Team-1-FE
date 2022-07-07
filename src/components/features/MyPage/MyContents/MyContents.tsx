import React from 'react';
import * as S from './MyContents.styled';

const MyContents = () => {
	return (
		<S.MyContentsContainer>
			<S.MyMenuLink to="/mypage/edit">프로필 수정하기</S.MyMenuLink>
			<S.MyMenuButton type="button" color="primary">
				Url 주소 복사하기
			</S.MyMenuButton>
			<S.MyMenuButton type="button" color="grey">
				로그아웃하기
			</S.MyMenuButton>
		</S.MyContentsContainer>
	);
};

export default MyContents;
