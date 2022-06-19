import React from 'react';
import * as S from './MessageChip.styled';
import { MessageChipViewType } from './type';

const MessageChipView = ({ message }: MessageChipViewType) => {
	return (
		<S.MessageChipWrapper>
			<span>{message}</span>
		</S.MessageChipWrapper>
	);
};

export default MessageChipView;
