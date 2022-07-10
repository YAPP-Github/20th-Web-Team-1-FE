import React from 'react';
import * as S from './MessageInput.styled';
import { MIN_LENGTH, PLACE_HOLDER } from '@/constants/messageSender';

const MessageInput = () => {
	return <S.MessageInput name="message" minLength={MIN_LENGTH} placeholder={PLACE_HOLDER} autoFocus />;
};

export default MessageInput;
