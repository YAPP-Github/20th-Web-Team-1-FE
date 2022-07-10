import React from 'react';
import BookmarkIcon from '@/assets/images/shared/star.svg';
import * as S from './MessageDetailHeader.styled';
import CloseIcon from '@/assets/images/shared/close.svg';
import { Link } from 'react-router-dom';

type Props = {
	profileImg: string | undefined;
	senderName: string | undefined;
	isBookmarked: boolean | undefined;
};

const MessageDetailHeader = ({ profileImg, senderName, isBookmarked }: Props) => {
	return (
		<S.MessageDetailHeaderWrapper>
			<S.MessageSenderInfo>
				<img src={profileImg} alt="" />
				<h2>{senderName}</h2>
			</S.MessageSenderInfo>

			<S.MessageAdditionalMenu>
				{isBookmarked && <img src={BookmarkIcon} alt="" />}
				<Link to="/messages">
					<img src={CloseIcon} alt="닫기" />
				</Link>
			</S.MessageAdditionalMenu>
		</S.MessageDetailHeaderWrapper>
	);
};

export default MessageDetailHeader;
