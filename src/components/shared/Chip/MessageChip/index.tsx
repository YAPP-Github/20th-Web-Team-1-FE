import React from 'react';
import * as S from './MessageChip.styled';
import { Props } from './MessageChip.type';

const MessageChip = ({ message }: Props) => {
	return (
		<S.MessageChipWrapper>
			<span>{message}</span>
		</S.MessageChipWrapper>
	);
};

export default MessageChip;
