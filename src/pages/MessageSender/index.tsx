import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MessageSender.styled';
import { RecipientName, FolderSelect, MessageInput, AnonymousCheckBox } from '@/components/features/MessageSender';
import Button from '@/components/shared/Button';
import { SuccessModal } from '@/components/shared';

const MessageSender = () => {
	const navigate = useNavigate();

	const [recipientName, setRecipientName] = useState('나에게');
	const [checkAnonymous, setCheckAnonymous] = useState(false);
	const [isSucceedSendMessage, setIsSucceedSendMessage] = useState(false);

	const [isOpenedSelectFolderBox, setIsOpenedSelectedFolderBox] = useState(false);
	const [selectedFolder, setSelectedFolder] = useState('');

	const handleSelectedFolderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selected = event.target.value;
		setSelectedFolder(selected);
		onToggleSelectedFolderBox();
	};

	const onToggleSelectedFolderBox = () => {
		setIsOpenedSelectedFolderBox(() => !isOpenedSelectFolderBox);
	};

	const onToggleCheckAnonymous = () => {
		setCheckAnonymous(() => !checkAnonymous);
	};

	const handleSubmitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			// 메시지 작성 정보 POST 전송

			// 정보가 잘 보내졌으면, 완료 모달 ON
			setIsSucceedSendMessage(true);
		} catch (error) {
			// 에러 처리
		}
	};

	const onGoBackClick = () => {
		navigate(-1);
	};

	return (
		<S.MessageSenderContainer onSubmit={handleSubmitMessage}>
			<S.TopWrapper>
				<RecipientName name={recipientName} />
				<FolderSelect
					folders={[]}
					isOpenedFolderBox={isOpenedSelectFolderBox}
					onToggleSelectedFolderBox={onToggleSelectedFolderBox}
					selectedFolder={selectedFolder}
					handleSelectedFolderChange={handleSelectedFolderChange}
				/>
			</S.TopWrapper>

			<S.MessageInputWrapper>
				<MessageInput />
			</S.MessageInputWrapper>

			<S.AnonymousCheckBoxWrapper>
				<AnonymousCheckBox checked={checkAnonymous} handleToggleChecked={onToggleCheckAnonymous} />
			</S.AnonymousCheckBoxWrapper>

			<S.ButtonWrapper>
				<Button type="button" bgColor="normal" fontWeight="medium" onClick={onGoBackClick}>
					뒤로가기
				</Button>
				<Button type="submit" bgColor="primary" fontWeight="bold">
					물 주기
				</Button>
			</S.ButtonWrapper>

			{isSucceedSendMessage && (
				<SuccessModal isSucceedSendMessage={isSucceedSendMessage} handleCloseBtnClick={onGoBackClick} />
			)}
		</S.MessageSenderContainer>
	);
};

export default MessageSender;
