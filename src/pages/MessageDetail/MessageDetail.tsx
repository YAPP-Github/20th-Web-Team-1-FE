import React, { useEffect } from 'react';
import { MessageDetailHeader } from '@/components/features/MessageDetail';
import * as S from './MessageDetail.styled';
import ArrowUpIcon from '@/assets/images/shared/arrow_up.svg';
import ArrowDownIcon from '@/assets/images/shared/arrow_down.svg';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { messageDetailFetcher, readMessage } from '@/apis/messages';
import { MessageDetailData } from '@/types/message';
import { MessageMenu } from '@/components/features/MessageBox';
import { SideDrawer } from '@/components/shared';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';

const MessageDetail = () => {
	const myInfo = useRecoilValue(myInfoState);

	const { messageId } = useParams();
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const { data: messageDetailData } = useQuery<MessageDetailData>(
		['messageDetail', messageId],
		() => messageDetailFetcher(messageId),
		{
			refetchOnWindowFocus: false,
			retry: 1,
		},
	);

	const onToggleOpenDrawer = () => {
		setOpenedDrawer(() => !openedDrawer);
	};

	useEffect(() => {
		if (messageDetailData?.responseDto.alreadyRead === false) {
			readMessage(messageId);
		}
	}, [messageId, messageDetailData]);

	return (
		<S.Wrapper>
			<MessageMenu
				isEdit={true}
				onToggleMovingFolderModal={() => {
					console.log('movingmodal');
				}}
				onToggleOpenDrawer={onToggleOpenDrawer}
				deleteMessages={() => {
					console.log('deleteMessage');
				}}
			/>
			<S.MessageDetailContainer>
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
						다음 메시지
						<S.ArrowDownIcon src={ArrowDownIcon} alt="" />
					</Link>
				</S.MessageNavButtonWrapper>
			</S.MessageDetailContainer>
			<SideDrawer
				username={myInfo?.nickname}
				email={myInfo?.email}
				profileImg={myInfo?.userImage}
				onModal={openedDrawer}
				setOnModal={onToggleOpenDrawer}
			/>
		</S.Wrapper>
	);
};

export default MessageDetail;
