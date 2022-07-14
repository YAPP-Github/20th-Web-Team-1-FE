import React from 'react';
import { MyInfo, MyContents } from '@/components/features/MyPage';
import * as S from './MyPage.styled';
import ServicePolicy from '@/components/features/MyPage/ServicePolicy';

const MyPage = () => {
	return (
		<S.MyPageContainer>
			<div>
				<MyInfo />
				<MyContents />
			</div>
			<ServicePolicy />
		</S.MyPageContainer>
	);
};

export default MyPage;
