import { BackgroundArea, BottomNav, Header } from '@/components/layout';
import React from 'react';
import * as S from './Layout.styled';

type Props = {
	path: string;
	children: JSX.Element;
};

const Layout = ({ children, path }: Props) => {
	return (
		<>
			<BackgroundArea />
			<S.AppContainer>
				{path === 'public' && <S.LayoutContentWrapper>{children}</S.LayoutContentWrapper>}

				{path === 'private' && (
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
