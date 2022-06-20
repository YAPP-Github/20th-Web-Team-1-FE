import React from 'react';
import { RecipientName } from '@/components/features/MessageSender';
import * as S from './MessageSender.styled';
import { MessageSenderPropsType } from './type';

const MessageSenderView = ({ name }: MessageSenderPropsType) => {
	return (
		<main>
			<S.TopContainer>
				<RecipientName name={name} />
			</S.TopContainer>
		</main>
	);
};

export default MessageSenderView;
