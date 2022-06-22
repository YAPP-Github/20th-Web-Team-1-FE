import React, { ReactNode } from 'react';
import { Header, BottomNav } from '@/components/layout';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
			<BottomNav />
		</>
	);
};

export default Layout;
