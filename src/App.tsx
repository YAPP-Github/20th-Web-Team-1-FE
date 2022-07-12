import React, { useCallback, useEffect } from 'react';
import { Routers } from '@/components/shared';
import { Layout } from '@/components/layout';
import { checkMyInfo } from '@/apis/users';
import { useSetRecoilState } from 'recoil';
import { myInfoState } from '@/stores/user';

const App = () => {
	const setMyInfo = useSetRecoilState(myInfoState);

	const handleCheckIsLoggedIn = useCallback(async () => {
		const result = await checkMyInfo();

		setMyInfo(result);
	}, [setMyInfo]);

	useEffect(() => {
		handleCheckIsLoggedIn();
	}, [handleCheckIsLoggedIn]);

	return (
		<Layout>
			<Routers />
		</Layout>
	);
};

export default App;
