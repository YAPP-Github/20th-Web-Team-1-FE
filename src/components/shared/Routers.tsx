import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticeTree from '@/pages/NoticeTree/NoticeTree';

const Routers = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NoticeTree />} />
					{/* <Route path="/tree" element={} />
					<Route path="/friends" element={} />
					<Route path="/message" element={} />
					<Route path="/*" element={} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default Routers;
