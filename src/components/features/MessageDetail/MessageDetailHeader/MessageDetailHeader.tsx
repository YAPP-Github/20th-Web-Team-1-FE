import React from 'react';
import BookmarkIcon from '@/assets/images/shared/star.svg';
import * as S from './MessageDetailHeader.styled';
import CloseIcon from '@/assets/images/shared/close.svg';

type Props = {
	profileImg: string;
	senderName: string;
	isBookmarked: boolean;
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
				<button type="button">
					<img src={CloseIcon} alt="닫기" />
				</button>
			</S.MessageAdditionalMenu>
		</S.MessageDetailHeaderWrapper>
	);
};

export default MessageDetailHeader;
