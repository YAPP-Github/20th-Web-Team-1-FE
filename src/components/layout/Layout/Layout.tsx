import React, { ReactNode } from 'react';
import { Header, BottomNav, BackgroundArea } from '@/components/layout';
import * as S from './Layout.styled';
import { useLocation } from 'react-router-dom';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	const { pathname } = useLocation();

	return (
		<>
			<BackgroundArea />
			<S.AppContainer>
				{pathname === '/login' || pathname === '/not-found' || pathname === '/' ? (
					<>{children}</>
				) : (
					<>
						<Header />
						<S.LayoutContentWrapper>{children}</S.LayoutContentWrapper>
						<BottomNav />
					</>
				)}
			</S.AppContainer>
		</>
	);
};

export default Layout;
