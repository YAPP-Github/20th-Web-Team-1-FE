import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MessageSender.styled';
import { RecipientName, FolderSelect, MessageInput, AnonymousCheckBox } from '@/components/features/MessageSender';
import Button from '@/components/shared/Button';
import { SuccessModal } from '@/components/shared';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';
import { getForest } from '@/apis/forest';
import { DEFAULT_FOLDER_NAME } from '@/constants/messageSender';
import { Folder } from '@/types/forest';

const MessageSender = () => {
	const navigate = useNavigate();
	const { treeId } = useParams();

	const myInfo = useRecoilValue(myInfoState);

	const { data: trees } = useQuery('getForest', () => getForest(myInfo?.id));

	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const [recipientName, setRecipientName] = useState('나에게');
	const [checkAnonymous, setCheckAnonymous] = useState(false);
	const [isSucceedSendMessage, setIsSucceedSendMessage] = useState(false);
	const [selectedFolder, setSelectedFolder] = useState('');
	const [isOpenedSelectFolderBox, setIsOpenedSelectedFolderBox] = useState(false);

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

		const data = getPostingMessageInfo();
		console.log(data);

		try {
			// 메시지 작성 정보 POST 전송
			// 정보가 잘 보내졌으면, 완료 모달 ON
			// setIsSucceedSendMessage(true);
		} catch (error) {
			// 에러 처리
		}
	};

	const getPostingMessageInfo = () => {
		return {
			anonymous: checkAnonymous,
			content: messageInputRef.current?.value,
			folderId: trees?.filter((tree) => tree.name === selectedFolder)[0].id ?? null,
			receiverId: myInfo?.id,
		};
	};

	const onGoBackClick = () => {
		navigate(-1);
	};

	const setInitialSelectedFolder = (trees: Folder[] | undefined, targetTreeId: string) =>
		trees?.filter((tree) => String(tree.id) === targetTreeId)[0]?.name || DEFAULT_FOLDER_NAME;

	useEffect(() => {
		setSelectedFolder(setInitialSelectedFolder(trees, String(treeId)));
	}, [trees]);

	return (
		<S.MessageSenderContainer onSubmit={handleSubmitMessage}>
			<S.TopWrapper>
				<RecipientName name={recipientName} />
				<FolderSelect
					folders={trees}
					isOpenedFolderBox={isOpenedSelectFolderBox}
					onToggleSelectedFolderBox={onToggleSelectedFolderBox}
					selectedFolder={selectedFolder}
					handleSelectedFolderChange={handleSelectedFolderChange}
				/>
			</S.TopWrapper>

			<S.MessageInputWrapper>
				<MessageInput messageInputRef={messageInputRef} />
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
