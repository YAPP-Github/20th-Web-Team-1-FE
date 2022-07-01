import React from 'react';
import { MyInfo, MyContents } from '@/components/features/MyPage';
import * as S from './MyPage.styled';

const MyPage = () => {
	return (
		<S.MyPageContainer>
			<MyInfo />
			<MyContents />
		</S.MyPageContainer>
	);
};

export default MyPage;
