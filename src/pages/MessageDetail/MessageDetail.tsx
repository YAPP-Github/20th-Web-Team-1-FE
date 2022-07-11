import React, { useEffect } from 'react';
import { MessageTopMenu } from '@/components/shared';
import { MessageDetailHeader } from '@/components/features/MessageDetail';
import * as S from './MessageDetail.styled';
import ArrowUpIcon from '@/assets/images/shared/arrow_up.svg';
import ArrowDownIcon from '@/assets/images/shared/arrow_down.svg';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { messageDetailFetcher, readMessage } from '@/apis/messages';
import { MessageDetailData } from '@/types/message';

const MessageDetail = () => {
	const { messageId } = useParams();

	const { data: messageDetailData } = useQuery<MessageDetailData>(
		['messageDetail', messageId],
		() => messageDetailFetcher(messageId),
		{
			refetchOnWindowFocus: false,
			retry: 1,
		},
	);

	useEffect(() => {
		if (messageDetailData?.responseDto.alreadyRead === false) {
			readMessage(messageId);
		}
	}, [messageId, messageDetailData]);

	return (
		<S.MessageDetailContainer>
			<MessageTopMenu
				category="Yapp 20기 Web1"
				leftBtnName="삭제하기"
				rightBtnName="이동하기"
				onClickLeftBtn={() => {}}
				onClickRightBtn={() => {}}
			/>

			<MessageDetailHeader
				profileImg={messageDetailData?.responseDto.senderProfileImage}
				senderName={
					messageDetailData?.responseDto.anonymous === false ? messageDetailData?.responseDto.senderNickname : '익명'
				}
				isBookmarked={messageDetailData?.responseDto.favorite}
			/>

			<S.MessageContentWrapper>{messageDetailData?.responseDto.content}</S.MessageContentWrapper>

			<S.MessageNavButtonWrapper>
				<Link to={`/messages/${messageDetailData?.prevId}`}>
					<S.ArrowIcon src={ArrowUpIcon} alt="" />
					이전 메시지
				</Link>

				<Link to={`/messages/${messageDetailData?.nextId}`}>
					<S.ArrowIcon src={ArrowDownIcon} alt="" />
					다음 메시지
				</Link>
			</S.MessageNavButtonWrapper>
		</S.MessageDetailContainer>
	);
};

export default MessageDetail;
