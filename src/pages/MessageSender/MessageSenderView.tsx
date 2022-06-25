import React from 'react';
import { RecipientName, FolderSelect, MessageInput, AnonymousCheckBox } from '@/components/features/MessageSender';
import ButtonView from '@/components/shared/Button/ButtonView';
import * as S from './MessageSender.styled';
import { MessageSenderPropsType } from './type';

const MessageSenderView = ({ name, checked, handleToggleChecked, handleGoBackClick }: MessageSenderPropsType) => {
	return (
		<S.MessageSenderContainer>
			<S.TopContainer>
				<RecipientName name={name} />
				<FolderSelect />
			</S.TopContainer>

			<S.MessageInputContainer>
				<MessageInput />
			</S.MessageInputContainer>

			<S.AnonymousCheckBoxContainer>
				<AnonymousCheckBox checked={checked} handleToggleChecked={handleToggleChecked} />
			</S.AnonymousCheckBoxContainer>

			<S.ButtonContainer>
				<ButtonView type="button" bgColor="normal" onClick={handleGoBackClick}>
					뒤로가기
				</ButtonView>
				<ButtonView type="submit" bgColor="primary" onClick={() => console.log('물 주기 API POST Go !')}>
					물 주기
				</ButtonView>
			</S.ButtonContainer>
		</S.MessageSenderContainer>
	);
};

export default MessageSenderView;
