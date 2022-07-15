import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoticeTree, Forest, MyPage, MessageSender, MessageDetail, MessageBox } from '@/pages';
import TreeAddForm from '../features/Forest/TreeAddForm';
import ProfileEdit from '@/pages/MyPage/ProfileEdit';
import Login from '@/pages/Login';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<NoticeTree />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forest" element={<Forest />} />
			<Route path="/forest/edit" element={<TreeAddForm />} />
			<Route path="/forest/edit/:treeId" element={<TreeAddForm />} />
			<Route path="/mypage" element={<MyPage />} />
			<Route path="/mypage/edit" element={<ProfileEdit />} />
			<Route path="/message/edit" element={<MessageSender />} />
			<Route path="/message/edit/:folderId" element={<MessageSender />} />
			<Route path="/messages" element={<MessageBox />} />
			<Route path="/messages/:treeId" element={<MessageBox />} />
			<Route path="/message/:messageId" element={<MessageDetail />} />

			{/* <Route path="/friends" element={} />
			<Route path="/*" element={} /> */}
		</Routes>
	);
};
export default Routers;
