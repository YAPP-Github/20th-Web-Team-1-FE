import React from 'react';
import { MyInfo, MyContents } from '@/components/features/MyPage';
import * as S from './MyPage.styled';
import ServicePolicy from '@/components/features/MyPage/ServicePolicy';
import withAuth from '@/utils/HOC/withAuth';

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

export default withAuth(MyPage);
