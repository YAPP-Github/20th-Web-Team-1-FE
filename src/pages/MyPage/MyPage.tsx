import React from 'react';
import MyInfo from '@/components/features/MyPage/MyInfo/MyInfo';
import MyContents from '@/components/features/MyPage/MyContents/MyContents';

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
