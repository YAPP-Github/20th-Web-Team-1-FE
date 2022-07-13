import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoticeTree, Trees, MyPage, MessageSender, MessageDetail, MessageBox } from '@/pages';
import TreeAddForm from '../features/Trees/TreeAddForm';
import ProfileEdit from '@/pages/MyPage/ProfileEdit';
import Login from '@/pages/Login';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<NoticeTree />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forest" element={<Trees />} />
			<Route path="/forest/edit" element={<TreeAddForm />} />
			<Route path="/mypage" element={<MyPage />} />
			<Route path="/mypage/edit" element={<ProfileEdit />} />
			<Route path="/message/edit" element={<MessageSender />} />
			<Route path="/message/edit/:folderId" element={<MessageSender />} />
			<Route path="/messages" element={<MessageBox />} />
			<Route path="/messages/:messageId" element={<MessageDetail />} />
			{/* <Route path="/friends" element={} />
			<Route path="/*" element={} /> */}
		</Routes>
	);
};
export default Routers;
