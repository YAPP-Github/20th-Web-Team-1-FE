import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MessageSender.styled';
import { RecipientName, FolderSelect, MessageInput, AnonymousCheckBox } from '@/components/features/MessageSender';
import ButtonView from '@/components/shared/Button/ButtonView';

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
		<S.MessageSenderContainer>
			<S.TopContainer>
				<RecipientName name={recipientName} />
				<FolderSelect />
			</S.TopContainer>

			<S.MessageInputContainer>
				<MessageInput />
			</S.MessageInputContainer>

			<S.AnonymousCheckBoxContainer>
				<AnonymousCheckBox checked={checkAnonymous} handleToggleChecked={onToggleCheckAnonymous} />
			</S.AnonymousCheckBoxContainer>

			<S.ButtonContainer>
				<ButtonView type="button" bgColor="normal" onClick={onGoBackClick}>
					뒤로가기
				</ButtonView>
				<ButtonView type="submit" bgColor="primary" onClick={() => console.log('물 주기 API POST Go !')}>
					물 주기
				</ButtonView>
			</S.ButtonContainer>
		</S.MessageSenderContainer>
	);
};

export default MessageSender;
