import React from 'react';
import LikeIcon from '@/assets/images/shared/star.svg';
import StarIcon from '@/assets/images/messages/star.svg';
import * as S from './MessageDetailHeader.styled';
import CloseIcon from '@/assets/images/shared/close.svg';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { updateFavoriteMessage } from '@/apis/messages';
import { useSetRecoilState } from 'recoil';
import { errorToastState } from '@/stores/modal';

type Props = {
	profileImg: string | undefined;
	senderName: string | undefined;
	treeId: string | undefined;
	isLike: boolean | undefined;
	messageId: number;
	onToggleLike: () => void;
};

const MessageDetailHeader = ({ profileImg, treeId, senderName, isLike, messageId, onToggleLike }: Props) => {
	const setErrorToastText = useSetRecoilState(errorToastState);

	const { mutate: updateFavoriteMutate } = useMutation(() => updateFavoriteMessage(messageId), {
		onSuccess: () => {
			onToggleLike();
		},
		onError: () => {
			setErrorToastText('네트워크 에러! 즐겨찾기 요청이 실패했습니다. ');
		},
	});

	return (
		<S.MessageDetailHeaderWrapper>
			<S.MessageSenderInfo>
				<img src={`${import.meta.env.VITE_API_BASE_URL}/${profileImg}`} alt="" />
				<h2>{senderName}</h2>
			</S.MessageSenderInfo>

			<S.MessageMenu>
				{isLike ? (
					<S.LikeButton onClick={() => updateFavoriteMutate()}>
						<img src={LikeIcon} alt="" />
					</S.LikeButton>
				) : (
					<S.LikeButton onClick={() => updateFavoriteMutate()}>
						<img src={StarIcon} alt="" style={{ width: '15px', height: '15px' }} />
					</S.LikeButton>
				)}
				<Link to={treeId ? `/messages/${treeId}` : '/messages'}>
					<img src={CloseIcon} alt="닫기" />
				</Link>
			</S.MessageMenu>
		</S.MessageDetailHeaderWrapper>
	);
};

export default MessageDetailHeader;
