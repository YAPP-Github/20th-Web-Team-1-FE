import {
	Forest,
	MessageBox,
	MessageDetail,
	MessageSender,
	MyPage,
	NoticeTree,
	TreeDetail,
	NotFound,
	Landing,
} from '@/pages';
import Login from '@/pages/Login';
import ProfileEdit from '@/pages/MyPage/ProfileEdit';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TreeAddForm from '../features/Forest/TreeAddForm';

const Routers = () => {
	return (
		<Routes>
			<Route path="/landing" element={<Landing />} />
			<Route path="/" element={<NoticeTree />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forest" element={<Forest />} />
			<Route path="/forest/:treeId" element={<TreeDetail />} />
			<Route path="/forest/edit" element={<TreeAddForm />} />
			<Route path="/forest/edit/:treeId" element={<TreeAddForm />} />
			<Route path="/mypage" element={<MyPage />} />
			<Route path="/mypage/edit" element={<ProfileEdit />} />
			<Route path="/message/edit" element={<MessageSender />} />
			<Route path="/message/edit/:treeId" element={<MessageSender />} />
			<Route path="/messages" element={<MessageBox />} />
			<Route path="/messages/:treeId" element={<MessageBox />} />
			<Route path="/message/:messageId" element={<MessageDetail />} />
			<Route path="/message/:treeId/:messageId" element={<MessageDetail />} />
			<Route path="/not-found" element={<NotFound />} />
			<Route path="*" element={<Navigate to="not-found" />} />
			{/* <Route path="/friends" element={} /> */}
		</Routes>
	);
};
export default Routers;
