import { checkMyInfo } from '@/apis/users';
import { Routers } from '@/components/shared';
import { myInfoState } from '@/stores/user';
import React, { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const App = () => {
	const setMyInfo = useSetRecoilState(myInfoState);

	const handleCheckMyInfo = useCallback(async () => {
		const response = await checkMyInfo();

		setMyInfo(response?.payload);
	}, [setMyInfo]);

	useEffect(() => {
		handleCheckMyInfo();
	}, [handleCheckMyInfo]);

	const setOneVh = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};
	useEffect(() => {
		setOneVh();
		window.addEventListener('resize', setOneVh);
	}, []);

	return <Routers />;
};

export default App;
