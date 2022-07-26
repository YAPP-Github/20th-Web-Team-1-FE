import React from 'react';
import LikeIcon from '@/assets/images/shared/star.svg';
import StarIcon from '@/assets/images/messages/star.svg';
import * as S from './MessageDetailHeader.styled';
import CloseIcon from '@/assets/images/shared/close.svg';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { updateFavoriteMessage } from '@/apis/messages';

type Props = {
	profileImg: string | undefined;
	senderName: string | undefined;
	treeId: string | undefined;
	isLike: boolean | undefined;
	messageId: number;
	onToggleLike: () => void;
};

const MessageDetailHeader = ({ profileImg, treeId, senderName, isLike, messageId, onToggleLike }: Props) => {
	const { mutate: updateFavoriteMutate } = useMutation(() => updateFavoriteMessage(messageId));
	const { state } = useLocation();

	const onUpdateFavoriteMessage = () => {
		updateFavoriteMutate();
		onToggleLike();
	};

	return (
		<S.MessageDetailHeaderWrapper>
			<S.MessageSenderInfo>
				<img src={`${import.meta.env.VITE_API_BASE_URL}/${profileImg}`} alt="" />
				<h2>{senderName}</h2>
			</S.MessageSenderInfo>

			<S.MessageMenu>
				{isLike ? (
					<S.LikeButton onClick={onUpdateFavoriteMessage}>
						<img src={LikeIcon} alt="" />
					</S.LikeButton>
				) : (
					<S.LikeButton onClick={onUpdateFavoriteMessage}>
						<img src={StarIcon} alt="" style={{ width: '15px', height: '15px' }} />
					</S.LikeButton>
				)}
				<Link to={state ? `/messages/${state}` : treeId ? `/messages/${treeId}` : '/messages'}>
					<img src={CloseIcon} alt="닫기" />
				</Link>
			</S.MessageMenu>
		</S.MessageDetailHeaderWrapper>
	);
};

export default MessageDetailHeader;
