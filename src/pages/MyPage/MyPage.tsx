import React from 'react';
import { MyInfo, MyContents } from '@/components/features/MyPage';

const MyPage = () => {
	return (
		<main>
			<h1 className="a11y-hidden">마이페이지</h1>
			<MyInfo />
			<MyContents />
		</main>
	);
};

export default MyPage;
