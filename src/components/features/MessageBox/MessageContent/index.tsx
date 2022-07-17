import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MessageContent.styled';
import { MessageContentProps } from './MessageContent.type';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { MessageCheckBox } from '@/components/features/MessageBox';
import BeeIcon from '@/assets/images/messages/message_bee.svg';
import LikeIcon from '@/assets/images/messages/like_star.svg';
import StarIcon from '@/assets/images/messages/star.svg';
import { useMutation, useQueryClient } from 'react-query';
import { updateFavoriteMessage } from '@/apis/messages';

const MessageContent = ({ message, checkMode, checkMessages, onToggleCheckMessage, idx }: MessageContentProps) => {
	dayjs.locale('ko');
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [isLikeArea, setIsLikeArea] = useState(false);

	const { mutate: updateFavoriteMutate } = useMutation(() => updateFavoriteMessage(message.id), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const moveToMessageDetail = (messageId: number) => {
		if (checkMode) {
			return;
		}
		if (!isLikeArea) {
			navigate(`/message/${messageId}`);
		}
	};

	return (
		<S.MessageWrapper
			checked={checkMessages.includes(message.id)}
			onClick={() => moveToMessageDetail(message.id)}
			idx={idx}
		>
			<S.MessageContainer>
				{checkMode && (
					<MessageCheckBox
						checked={checkMessages.includes(message.id)}
						handleToggleChecked={onToggleCheckMessage}
						id={message.id}
					/>
				)}
				<S.ProfileImage>
					<img src={BeeIcon} alt="profileImage" />
				</S.ProfileImage>
				<S.ContentContainer>
					<S.InnerBox>
						<S.Sender>{message.senderNickname}</S.Sender>
						<S.TimeText>{dayjs(message.createdDate).format('YYYY.MM.DD A HH:MM')}</S.TimeText>
					</S.InnerBox>
					<S.InnerBox>
						<S.MessageText>{message.content}</S.MessageText>
						<S.FavoriteContainer
							onClick={() => updateFavoriteMutate()}
							onMouseEnter={() => setIsLikeArea(true)}
							onMouseLeave={() => setIsLikeArea(false)}
						>
							{message.favorite ? <img src={LikeIcon} alt="" /> : <img src={StarIcon} alt="" />}
						</S.FavoriteContainer>
					</S.InnerBox>
				</S.ContentContainer>
			</S.MessageContainer>
		</S.MessageWrapper>
	);
};

export default MessageContent;
