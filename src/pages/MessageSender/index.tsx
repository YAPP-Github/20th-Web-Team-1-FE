import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MessageSender.styled';
import { RecipientName, FolderSelect, MessageInput, AnonymousCheckBox } from '@/components/features/MessageSender';
import Button from '@/components/shared/Button';
import { MediumAlertModal, SuccessModal } from '@/components/shared';
import { useQuery, useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';
import { getForest } from '@/apis/forest';
import { DEFAULT_FOLDER_NAME } from '@/constants/messageSender';
import { Folder } from '@/types/forest';
import { postMessages } from '@/apis/messages';
import PencilImg from '@/assets/images/shared/pencil.png';
import WaterImg from '@/assets/images/noticeTree/watering_icon.svg';
import SadBeeImg from '@/assets/images/mypage/logout_bee_img@2x.png';

const MessageSender = () => {
	const navigate = useNavigate();
	const { treeId } = useParams();

	const myInfo = useRecoilValue(myInfoState);

	const { data: trees } = useQuery(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		enabled: !!myInfo,
	});

	const postMessageMutation = useMutation(postMessages, {
		onSuccess: () => {
			setIsSucceedSendMessage(true);
		},
		onError: (error) => {
			console.log(error);
			setIsFailedSendMessage(true);
		},
	});

	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const [recipientName, setRecipientName] = useState('나에게');
	const [checkAnonymous, setCheckAnonymous] = useState(false);
	const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER_NAME);
	const [isOpenedSelectFolderBox, setIsOpenedSelectedFolderBox] = useState(false);
	const [isSucceedSendMessage, setIsSucceedSendMessage] = useState(false);
	const [isFailedSendMessage, setIsFailedSendMessage] = useState(false);
	const [isMessageTextSizeAlertVisible, setIsMessageTextSizeAlertVisible] = useState(false);

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

		if (data.content.length < 10 || data.content.length > 1000) {
			setIsMessageTextSizeAlertVisible(true);
			return;
		}

		postMessageMutation.mutate(data);
	};

	const getPostingMessageInfo = () => {
		return {
			anonymous: checkAnonymous,
			content: messageInputRef.current?.value as string,
			folderId: trees?.filter((tree) => tree.name === selectedFolder)[0]?.id ?? null,
			receiverId: myInfo?.id as number,
		};
	};

	const onGoBackClick = () => {
		navigate(-1);
	};

	const setInitialSelectedFolder = (trees: Folder[] | undefined, targetTreeId: string) =>
		trees?.filter((tree) => String(tree.id) === targetTreeId)[0]?.name || DEFAULT_FOLDER_NAME;

	useEffect(() => {
		setSelectedFolder(setInitialSelectedFolder(trees, String(treeId)));
	}, [trees, treeId]);

	return (
		<S.Container>
			<S.Background />
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
					<SuccessModal
						image={WaterImg}
						title={'물 주기 완료!'}
						messages={['따듯한 메시지를 무사히 전달했어요.', '덕분에 나무가 한 뼘 자라날 수 있게 되었어요!']}
						buttonText={'닫기'}
						isSucceedSendMessage={isSucceedSendMessage}
						handleCloseBtnClick={onGoBackClick}
					/>
				)}
				{isFailedSendMessage && (
					<SuccessModal
						image={SadBeeImg}
						title={'물 주기 실패!'}
						messages={['메시지를 전달하지 못했어요.', '다시 시도해주세요!']}
						buttonText={'닫기'}
						isSucceedSendMessage={isFailedSendMessage}
						handleCloseBtnClick={() => setIsFailedSendMessage(false)}
					/>
				)}
				{isMessageTextSizeAlertVisible && (
					<MediumAlertModal
						image={PencilImg}
						contents={['10자 이상, 1000자 이하로', '메시지를 작성해야 해요!']}
						buttonText={'닫기'}
						modalHandler={() => setIsMessageTextSizeAlertVisible(false)}
					/>
				)}
			</S.MessageSenderContainer>
		</S.Container>
	);
};

export default MessageSender;
