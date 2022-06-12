import React, { ReactNode } from 'react';
import { Header } from '@/components/layout';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
