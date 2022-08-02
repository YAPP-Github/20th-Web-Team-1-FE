import NotFoundIcon from '@/assets/images/shared/not_found.png';
import { Layout } from '@/components/layout';
import Button from '@/components/shared/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NotFound.styled';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<Layout path="public">
			<S.Wrapper>
				<S.Content>
					<img src={NotFoundIcon} alt="" />
					<span>Page Not Found</span>
				</S.Content>
				<Button type="button" bgColor="primary" onClick={() => navigate('/')}>
					돌아가기
				</Button>
			</S.Wrapper>
		</Layout>
	);
};

export default NotFound;
