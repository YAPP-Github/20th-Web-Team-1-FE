import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MessageContent.styled';

import { MessageContentProps } from './MessageContent.type';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ko';
import MessageCheckBox from '../MessageCheckBox';
import BeeIcon from '@/assets/images/messages/message_bee.svg';
import LikeIcon from '@/assets/images/messages/like_star.svg';

const MessageContent = ({ message, checkMode, checkMessages, onToggleCheckMessage }: MessageContentProps) => {
	dayjs.locale('ko');
	const navigate = useNavigate();

	const moveToMessageDetail = (messageId: number) => {
		if (checkMode) {
			return;
		} else {
			navigate(`/message/${messageId}`);
		}
	};

	return (
		<S.MessageWrapper checked={checkMessages.includes(message.id)} onClick={() => moveToMessageDetail(message.id)}>
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
					{message.favorite && <img src={LikeIcon} alt="profileImage" />}
				</S.InnerBox>
			</S.ContentContainer>
		</S.MessageWrapper>
	);
};

export default MessageContent;
