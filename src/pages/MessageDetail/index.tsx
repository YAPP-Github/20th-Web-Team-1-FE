import { deleteMessage, getMessageDetail, updateReadMessage } from '@/apis/messages';
import ArrowDownIcon from '@/assets/images/shared/arrow_down.svg';
import ArrowUpIcon from '@/assets/images/shared/arrow_up.svg';
import { MessageMenu } from '@/components/features/MessageBox';
import { MessageDetailHeader } from '@/components/features/MessageDetail';
import { AlertModal, MovingFolderModal, SideDrawer } from '@/components/shared';
import { MessageDetailData } from '@/types/message';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './MessageDetail.styled';

const MessageDetail = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { messageId } = useParams();
	const { treeId } = useParams();
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const [messageDetail, setMessageDetail] = useState<MessageDetailData | undefined>(undefined);

	useQuery<MessageDetailData>(['getMessageDetail', messageId], () => getMessageDetail(messageId), {
		onSuccess: (data) => {
			setMessageDetail(data);
		},
		enabled: !!messageId,
	});

	const { mutate: deleteMutate } = useMutation(() => deleteMessage([messageId]), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const onToggleOpenDrawer = () => {
		setOpenedDrawer(() => !openedDrawer);
	};

	const onClickDeleteButton = () => {
		setIsOpenDeleteModal(true);
	};

	const onToggleMovingFolderModal = () => {
		setIsMoving(!isMoving);
	};

	const deleteMessageHandler = () => {
		setIsOpenDeleteModal(false);
		deleteMutate();
		onMoveToNextMessage();
	};

	const onToggleLike = () => {
		if (messageDetail) {
			const newMessage = { ...messageDetail };
			newMessage.responseDto.favorite = !newMessage.responseDto.favorite;
			setMessageDetail(newMessage);
		}
	};

	const onClickNavButton = (messageId: number) => {
		const path = !treeId ? `/message/${messageId}` : `/message/${treeId}/${messageId}`;
		navigate(path);
	};

	const onMoveToNextMessage = () => {
		if (messageDetail) {
			const path =
				messageDetail.nextId !== 0
					? `/message/${treeId}/${messageDetail.nextId}`
					: messageDetail.prevId !== 0
					? `/message/${treeId}/${messageDetail.prevId}`
					: `/messages/${treeId}`;
			navigate(path);
		}
	};

	useEffect(() => {
		if (messageDetail?.responseDto.alreadyRead === false) {
			updateReadMessage(messageId);
		}
	}, [messageId, messageDetail]);

	return (
		<S.Wrapper>
			<MessageMenu
				isEdit={true}
				onToggleMovingFolderModal={onToggleMovingFolderModal}
				onToggleOpenDrawer={onToggleOpenDrawer}
				deleteMessages={onClickDeleteButton}
				treeName={messageDetail?.treeResponseDto.name}
			/>
			{messageDetail && (
				<S.MessageDetailContainer>
					<S.MessageContentContainer>
						<MessageDetailHeader
							profileImg={messageDetail.responseDto.senderProfileImage}
							senderName={
								messageDetail.responseDto.anonymous === false ? messageDetail.responseDto.senderNickname : '익명'
							}
							isLike={messageDetail.responseDto.favorite}
							messageId={messageDetail.responseDto.id}
							onToggleLike={onToggleLike}
							treeId={messageDetail.treeResponseDto.id}
						/>

						<S.MessageContent>{messageDetail.responseDto.content}</S.MessageContent>
					</S.MessageContentContainer>
					<S.MessageNavButtonWrapper>
						<S.Button onClick={() => onClickNavButton(messageDetail.prevId)} disabled={messageDetail.prevId === 0}>
							<S.ArrowIcon src={ArrowUpIcon} alt="" />
							이전 메시지
						</S.Button>

						<S.Button onClick={() => onClickNavButton(messageDetail.nextId)} disabled={messageDetail.nextId === 0}>
							다음 메시지
							<S.ArrowDownIcon src={ArrowDownIcon} alt="" />
						</S.Button>
					</S.MessageNavButtonWrapper>
				</S.MessageDetailContainer>
			)}
			<SideDrawer onModal={openedDrawer} setOnModal={onToggleOpenDrawer} />
			{isOpenDeleteModal && (
				<AlertModal
					isOpen={isOpenDeleteModal}
					modalTitle="메세지"
					modalMainImage="deleteMessageModal"
					modalDescMessages={[
						'메시지 삭제 시',
						'메세지함에 있던 메시지가 삭제되며',
						'삭제 후에는 복구할 수 없어요',
						'정말 삭제하시겠습니까?',
					]}
					buttonTitle="삭제하기"
					handleCloseBtnClick={() => {
						setIsOpenDeleteModal(false);
					}}
					handleMainBtnClick={deleteMessageHandler}
				/>
			)}
			{messageId && isMoving && (
				<MovingFolderModal
					isMoving={isMoving}
					onToggleMovingFolderModal={onToggleMovingFolderModal}
					checkMessages={[Number(messageId)]}
					handleAfterAction={onMoveToNextMessage}
				/>
			)}
		</S.Wrapper>
	);
};

export default MessageDetail;
