import React from 'react';
import SideDrawer from '@/components/shared/Modal/SideDrawer';
import * as S from './Message.styled';

import { MessageViewPropsType } from './type';

const MessageView = ({ openedDrawer, handleToggleOpenDrawer }: MessageViewPropsType) => {
	return (
		<S.MessageContainer>
			<S.HambergerButton type="button" onClick={handleToggleOpenDrawer}>
				사이드 바 열어 !
			</S.HambergerButton>
			<SideDrawer onModal={openedDrawer} setOnModal={handleToggleOpenDrawer} />
		</S.MessageContainer>
	);
};

export default MessageView;
