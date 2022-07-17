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

	const { data: messageDetailData } = useQuery<MessageDetailData>(
		['getMessageDetail', messageId],
		() => getMessageDetail(messageId),
		{
			refetchOnWindowFocus: false,
			retry: 1,
		},
	);

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

	useEffect(() => {
		if (messageDetailData?.responseDto.alreadyRead === false) {
			updateReadMessage(messageId);
		}
	}, [messageId, messageDetailData]);

	return (
		<S.Wrapper>
			<MessageMenu
				isEdit={true}
				onToggleMovingFolderModal={onToggleMovingFolderModal}
				onToggleOpenDrawer={onToggleOpenDrawer}
				deleteMessages={onClickDeleteButton}
			/>
			{messageDetailData && (
				<S.MessageDetailContainer>
					<MessageDetailHeader
						profileImg={messageDetailData.responseDto.senderProfileImage}
						senderName={
							messageDetailData.responseDto.anonymous === false ? messageDetailData.responseDto.senderNickname : '익명'
						}
						isBookmarked={messageDetailData.responseDto.favorite}
					/>

					<S.MessageContentWrapper>{messageDetailData.responseDto.content}</S.MessageContentWrapper>

					<S.MessageNavButtonWrapper>
						<Link to={messageDetailData.prevId === 0 ? '#' : `/message/${messageDetailData.prevId}`}>
							<S.ArrowIcon src={ArrowUpIcon} alt="" onClick={() => navigate(`/message/${messageDetailData.prevId}`)} />
							이전 메시지
						</Link>

						<Link to={messageDetailData.nextId === 0 ? '#' : `/message/${messageDetailData.nextId}`}>
							다음 메시지
							<S.ArrowDownIcon src={ArrowDownIcon} alt="" />
						</Link>
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
