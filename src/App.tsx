import React, { useCallback, useEffect } from 'react';
import { Routers } from '@/components/shared';
import { Layout } from '@/components/layout';
import { checkMyInfo } from '@/apis/users';
import { useSetRecoilState } from 'recoil';
import { myInfoState } from '@/stores/user';

const App = () => {
	const setMyInfo = useSetRecoilState(myInfoState);

	const handleCheckMyInfo = useCallback(async () => {
		const response = await checkMyInfo();

		setMyInfo(response?.payload);
	}, [setMyInfo]);

	useEffect(() => {
		handleCheckMyInfo();
	}, [handleCheckMyInfo]);

	return (
		<Layout>
			<Routers />
		</Layout>
	);
};

export default App;
