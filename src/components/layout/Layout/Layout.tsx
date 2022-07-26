import React, { ReactNode } from 'react';
import { Header, BottomNav } from '@/components/layout';
import * as S from './Layout.styled';
import { useLocation } from 'react-router-dom';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === '/login' || pathname === '/not-found' || pathname === '/landing' ? (
				<>{children}</>
			) : (
				<>
					<Header />
					<S.LayoutContentWrapper>{children}</S.LayoutContentWrapper>
					<BottomNav />
				</>
			)}
		</>
	);
};

export default Layout;
