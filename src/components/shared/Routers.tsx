import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeTree from '@/pages/NoticeTree/NoticeTree';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<NoticeTree />} />
			{/* <Route path="/trees" element={} />
					<Route path="/friends" element={} />
					<Route path="/messages" element={} />
					<Route path="/*" element={} /> */}
		</Routes>
	);
};
export default Routers;
