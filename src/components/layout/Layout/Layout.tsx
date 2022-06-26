import React, { ReactNode } from 'react';
import { Header, BottomNav } from '@/components/layout';
import * as S from './Layout.styled';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<S.LayoutContentWrapper>{children}</S.LayoutContentWrapper>
			<BottomNav />
		</>
	);
};

export default Layout;
