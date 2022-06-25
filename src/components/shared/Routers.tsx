import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeTree from '@/pages/NoticeTree';
import Trees from '@/pages/Trees';
import TreeAddForm from '../features/Trees/TreeAddForm';
import MyPage from '@/pages/MyPage/MyPage';
import MessageDetail from '@/pages/MessageDetail/MessageDetail';
import MessageSender from '@/pages/MessageSender';
import ProfileEdit from '@/pages/MyPage/ProfileEdit';
import Login from '@/pages/Login';
import Message from '@/pages/Message';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<NoticeTree />} />
			<Route path="/login" element={<Login />} />
			<Route path="/trees" element={<Trees />} />
			<Route path="/trees/edit" element={<TreeAddForm />} />
			<Route path="/mypage" element={<MyPage />} />
			<Route path="/mypage/edit" element={<ProfileEdit />} />
			<Route path="/send-message" element={<MessageSender />} />
			<Route path="/messages" element={<Message />} />
			<Route path="/messages/:messageId" element={<MessageDetail />} />
			{/* <Route path="/friends" element={} />
			<Route path="/*" element={} /> */}
		</Routes>
	);
};
export default Routers;
