import React from 'react';
import { RecipientName, MessageInput, AnonymousCheckBox } from '@/components/features/MessageSender';
import * as S from './MessageSender.styled';
import { MessageSenderPropsType } from './type';
import ButtonView from '@/components/shared/Button/ButtonView';

const MessageSenderView = ({ name }: MessageSenderPropsType) => {
	return (
		<main>
			<S.TopContainer>
				<RecipientName name={name} />
			</S.TopContainer>

			<S.MessageInputContainer>
				<MessageInput />
			</S.MessageInputContainer>

			<S.AnonymousCheckBoxContainer>
				<AnonymousCheckBox />
			</S.AnonymousCheckBoxContainer>

			<S.ButtonContainer>
				<ButtonView type="button" bgColor="normal">
					뒤로가기
				</ButtonView>
				<ButtonView type="submit" bgColor="primary">
					물 주기
				</ButtonView>
			</S.ButtonContainer>
		</main>
	);
};

export default MessageSenderView;
