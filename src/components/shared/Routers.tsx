import {
	Forest,
	Landing,
	MessageBox,
	MessageDetail,
	MessageSender,
	MyPage,
	NotFound,
	NoticeTree,
	PublicForest,
	TreeDetail,
} from '@/pages';
import Login from '@/pages/Login';
import ProfileEdit from '@/pages/MyPage/ProfileEdit';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TreeAddForm from '../features/Forest/TreeAddForm';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/main-tree" element={<NoticeTree />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forest" element={<Forest />} />
			<Route path="/forest/:userId" element={<PublicForest />} />
			<Route path="/forest/tree/:treeId" element={<TreeDetail />} />
			<Route path="/forest/tree/:treeId/:treeUserId" element={<TreeDetail />} />
			<Route path="/forest/edit" element={<TreeAddForm />} />
			<Route path="/forest/edit/:treeId" element={<TreeAddForm />} />
			<Route path="/mypage" element={<MyPage />} />
			<Route path="/mypage/edit" element={<ProfileEdit />} />
			<Route path="/message/edit" element={<MessageSender />} />
			<Route path="/message/edit/:treeUserId/:treeOwner" element={<MessageSender />} />
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
