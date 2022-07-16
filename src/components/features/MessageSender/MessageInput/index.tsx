import React from 'react';
import * as S from './MessageInput.styled';
import { MIN_LENGTH, PLACE_HOLDER } from '@/constants/messageSender';
import { Props } from './MessageInput.type';

const MessageInput = ({ messageInputRef }: Props) => {
	return (
		<S.MessageInput
			ref={messageInputRef}
			name="message"
			minLength={MIN_LENGTH}
			placeholder={PLACE_HOLDER}
			autoFocus
			required
		/>
	);
};

export default MessageInput;
