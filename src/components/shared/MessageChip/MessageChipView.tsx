import React from 'react';
import * as S from './MessageChip.styled';
import { MessageChipType } from './type';

const MessageChipView = ({ message }: MessageChipType) => {
	return (
		<S.MessageChipWrapper>
			<span>{message}</span>
		</S.MessageChipWrapper>
	);
};

export default MessageChipView;
