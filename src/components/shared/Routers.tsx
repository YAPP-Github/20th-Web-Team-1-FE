import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeTree from '@/pages/NoticeTree/NoticeTree';
import Trees from '@/pages/Trees';
import TreeAddForm from '../features/Trees/TreeAddForm';
import MyPage from '@/pages/MyPage/MyPage';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<NoticeTree />} />
			<Route path="/trees" element={<Trees />} />
			<Route path="/trees/edit" element={<TreeAddForm />} />
			<Route path="/mypage" element={<MyPage />} />

			{/* <Route path="/friends" element={} />
					<Route path="/messages" element={} />
					<Route path="/*" element={} /> */}
		</Routes>
	);
};
export default Routers;
