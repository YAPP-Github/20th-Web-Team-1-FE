import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeTree from '@/pages/NoticeTree/NoticeTree';
import Trees from '@/pages/Trees';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<NoticeTree />} />
			<Route path="/trees" element={<Trees />} />
			{/* <Route path="/friends" element={} />
			<Route path="/message" element={} />
			<Route path="/*" element={} /> */}
		</Routes>
	);
};
export default Routers;
