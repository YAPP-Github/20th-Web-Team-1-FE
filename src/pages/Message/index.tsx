import React, { useState } from 'react';
import MessageView from './MessageView';

const Message = () => {
	const [openedDrawer, setOpenedDrawer] = useState(false);

	const onToggleOpenDrawer = () => {
		setOpenedDrawer(() => !openedDrawer);
	};
	return <MessageView openedDrawer={openedDrawer} handleToggleOpenDrawer={onToggleOpenDrawer} />;
};

export default Message;
