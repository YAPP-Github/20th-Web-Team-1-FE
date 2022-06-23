import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageSenderView from './MessageSenderView';

const MessageSender = () => {
	const navigate = useNavigate();
	const [recipientName, setRecipientName] = useState('나에게');
	const [checkAnonymous, setCheckAnonymous] = useState(false);

	const onToggleCheckAnonymous = () => {
		setCheckAnonymous(() => !checkAnonymous);
	};

	const onGoBackClick = () => {
		navigate(-1);
	};

	return (
		<MessageSenderView
			name={recipientName}
			checked={checkAnonymous}
			handleToggleChecked={onToggleCheckAnonymous}
			handleGoBackClick={onGoBackClick}
		/>
	);
};

export default MessageSender;
