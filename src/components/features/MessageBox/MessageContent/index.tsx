import { updateFavoriteMessage } from '@/apis/messages';
import LikeIcon from '@/assets/images/messages/like_star.svg';
import StarIcon from '@/assets/images/messages/star.svg';
import { MessageCheckBox } from '@/components/features/MessageBox';
import { errorToastState } from '@/stores/modal';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './MessageContent.styled';
import { MessageContentProps } from './MessageContent.type';

const MessageContent = ({
	message,
	checkMode,
	checkMessages,
	onToggleCheckMessage,
	idx,
	onToggleLike,
}: MessageContentProps) => {
	dayjs.locale('ko');
	const navigate = useNavigate();
	const { treeId } = useParams();

	const setErrorToastText = useSetRecoilState(errorToastState);

	const { mutate: updateFavoriteMutate } = useMutation(() => updateFavoriteMessage(message.id), {
		onSuccess: () => {
			onToggleLike(idx);
		},
		onError: () => {
			setErrorToastText('네트워크 에러! 즐겨찾기에 실패했습니다. ');
		},
	});

	const moveToMessageDetail = (messageId: number) => {
		if (checkMode) {
			return;
		}

		navigate(treeId ? `/message/${treeId}/${messageId}` : `/message/${messageId}`);
	};

	const onClickFavoriteButtonHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation && e.stopPropagation();

		updateFavoriteMutate();
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
					<img src={`${import.meta.env.VITE_API_BASE_URL}/${message.senderProfileImage}`} alt="profileImage" />
				</S.ProfileImage>
				<S.ContentContainer>
					<S.InnerBox>
						<S.Sender>{message.senderNickname}</S.Sender>
						<S.TimeText>{dayjs(message.createdDate).format('YYYY.MM.DD A HH:MM')}</S.TimeText>
					</S.InnerBox>
					<S.InnerBox>
						<S.MessageText>{message.content}</S.MessageText>
						<S.FavoriteContainer onClick={onClickFavoriteButtonHandler}>
							{message.favorite ? <img src={LikeIcon} alt="" /> : <img src={StarIcon} alt="" />}
						</S.FavoriteContainer>
					</S.InnerBox>
				</S.ContentContainer>
			</S.MessageContainer>
		</S.MessageWrapper>
	);
};

export default MessageContent;
