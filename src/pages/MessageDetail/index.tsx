import React, { useEffect, useState } from 'react';
import * as S from './MessageDetail.styled';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getMessageDetail, updateReadMessage, deleteMessage } from '@/apis/messages';
import { MessageDetailData } from '@/types/message';
import { MessageMenu } from '@/components/features/MessageBox';
import { SideDrawer, AlertModal, MovingFolderModal } from '@/components/shared';
import { MessageDetailHeader } from '@/components/features/MessageDetail';
import ArrowUpIcon from '@/assets/images/shared/arrow_up.svg';
import ArrowDownIcon from '@/assets/images/shared/arrow_down.svg';

const MessageDetail = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { messageId } = useParams();

	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const [messageDetail, setMessageDetail] = useState<MessageDetailData | undefined>(undefined);

	const { data } = useQuery<MessageDetailData>(['getMessageDetail', messageId], () => getMessageDetail(messageId), {
		onSuccess: (data) => {
			setMessageDetail(data);
		},
		enabled: !!messageId,
	});

	console.log(messageDetail);

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
		navigate('/messages');
	};

	const onToggleLike = () => {
		if (messageDetail) {
			const newMessage = { ...messageDetail };
			newMessage.responseDto.favorite = !newMessage.responseDto.favorite;
			setMessageDetail(newMessage);
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
			/>
			{messageDetail && (
				<S.MessageDetailContainer>
					<MessageDetailHeader
						profileImg={messageDetail.responseDto.senderProfileImage}
						senderName={
							messageDetail.responseDto.anonymous === false ? messageDetail.responseDto.senderNickname : '익명'
						}
						isLike={messageDetail.responseDto.favorite}
						messageId={messageDetail.responseDto.id}
						onToggleLike={onToggleLike}
					/>

					<S.MessageContentWrapper>{messageDetail.responseDto.content}</S.MessageContentWrapper>

					<S.MessageNavButtonWrapper>
						{messageDetail.prevId > 0 && (
							<Link to={`/message/${messageDetail.prevId}`}>
								<S.ArrowIcon src={ArrowUpIcon} alt="" onClick={() => navigate(`/message/${messageDetail.prevId}`)} />
								이전 메시지
							</Link>
						)}
						{messageDetail.nextId > 0 && (
							<Link to={`/message/${messageDetail.nextId}`}>
								다음 메시지
								<S.ArrowDownIcon src={ArrowDownIcon} alt="" />
							</Link>
						)}
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
				/>
			)}
		</S.Wrapper>
	);
};

export default MessageDetail;
