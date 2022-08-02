import { MyContents, MyInfo } from '@/components/features/MyPage';
import ServicePolicy from '@/components/features/MyPage/ServicePolicy';
import { Layout } from '@/components/layout';
import withAuth from '@/utils/HOC/withAuth';
import React from 'react';
import * as S from './MyPage.styled';

const MyPage = () => {
	return (
		<Layout path={'private'}>
			<S.MyPageContainer>
				<div>
					<MyInfo />
					<MyContents />
				</div>
				<ServicePolicy />
			</S.MyPageContainer>
		</Layout>
	);
};

export default withAuth(MyPage);
