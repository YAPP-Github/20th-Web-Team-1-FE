import { getForest } from '@/apis/forest';
import { postMessages } from '@/apis/messages';
import SadBeeImg from '@/assets/images/mypage/logout_bee_img@2x.png';
import WaterImg from '@/assets/images/noticeTree/watering_icon.png';
import PencilImg from '@/assets/images/shared/pencil.png';
import { AnonymousCheckBox, FolderSelect, MessageInput, RecipientName } from '@/components/features/MessageSender';
import { Layout } from '@/components/layout';
import { MediumAlertModal, SuccessModal } from '@/components/shared';
import Button from '@/components/shared/Button';
import { DEFAULT_FOLDER_NAME } from '@/constants/messageSender';
import { myInfoState } from '@/stores/user';
import { Folder } from '@/types/forest';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './MessageSender.styled';

const MessageSender = () => {
	const navigate = useNavigate();
	const { treeId } = useParams();
	const { treeUserId } = useParams();
	const { treeOwner } = useParams();
	const myInfo = useRecoilValue(myInfoState);

	const { data: treeInfo } = useQuery(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		enabled: !!myInfo,
	});

	const postMessageMutation = useMutation(postMessages, {
		onSuccess: () => {
			setIsSucceedSendMessage(true);
		},
		onError: () => {
			setIsFailedSendMessage(true);
		},
	});

	const messageInputRef = useRef<HTMLTextAreaElement>(null);

	const [checkAnonymous, setCheckAnonymous] = useState(false);
	const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER_NAME);
	const [isOpenedSelectFolderBox, setIsOpenedSelectedFolderBox] = useState(false);
	const [isSucceedSendMessage, setIsSucceedSendMessage] = useState(false);
	const [isFailedSendMessage, setIsFailedSendMessage] = useState(false);
	const [isMessageTextSizeAlertVisible, setIsMessageTextSizeAlertVisible] = useState(false);

	const recipientName = treeOwner ? `${treeOwner}에게` : '나에게';

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
			folderId: treeInfo?.responseDtoList?.filter((tree) => tree.name === selectedFolder)[0]?.id ?? null,
			receiverId: treeUserId ? Number(treeUserId) : (myInfo?.id as number),
		};
	};

	const onGoBackClick = () => {
		navigate(-1);
	};

	const setInitialSelectedFolder = (trees: Folder[] | undefined, targetTreeId: string) =>
		trees?.filter((tree) => String(tree.id) === targetTreeId)[0]?.name || DEFAULT_FOLDER_NAME;

	useEffect(() => {
		setSelectedFolder(setInitialSelectedFolder(treeInfo?.responseDtoList, String(treeId)));
	}, [treeInfo, treeId]);

	return (
		<Layout path={myInfo ? 'private' : 'public'}>
			<S.Container>
				<S.Background />
				<S.MessageSenderContainer onSubmit={handleSubmitMessage}>
					<S.TopWrapper>
						<RecipientName name={recipientName} />
						{!treeOwner && (
							<FolderSelect
								folders={treeInfo?.responseDtoList}
								isOpenedFolderBox={isOpenedSelectFolderBox}
								onToggleSelectedFolderBox={onToggleSelectedFolderBox}
								selectedFolder={selectedFolder}
								handleSelectedFolderChange={handleSelectedFolderChange}
							/>
						)}
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
							width={200}
							height={200}
							contents={['10자 이상, 1000자 이하로', '메시지를 작성해야 해요!']}
							buttonText={'닫기'}
							modalHandler={() => setIsMessageTextSizeAlertVisible(false)}
						/>
					)}
				</S.MessageSenderContainer>
			</S.Container>
		</Layout>
	);
};

export default MessageSender;
