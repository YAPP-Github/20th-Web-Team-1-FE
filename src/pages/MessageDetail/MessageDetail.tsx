import React from 'react';
import { MessageTopMenu } from '@/components/shared';
import { MessageDetailHeader } from '@/components/features/MessageDetail';
import * as S from './MessageDetail.styled';
import ProfileBeeImg from '@/assets/images/mypage/profile_bee_img@2x.png';
import ArrowUpIcon from '@/assets/images/shared/arrow_up.svg';
import ArrowDownIcon from '@/assets/images/shared/arrow_down.svg';
import { Link } from 'react-router-dom';

const MessageDetail = () => {
	return (
		<S.MessageDetailContainer>
			<MessageTopMenu
				category="Yapp 20기 Web1"
				leftBtnName="삭제하기"
				rightBtnName="이동하기"
				onClickLeftBtn={() => {}}
				onClickRightBtn={() => {}}
			/>

			<MessageDetailHeader profileImg={ProfileBeeImg} senderName="친구1" isBookmarked={true} />

			<S.MessageContentWrapper>메시지 본문</S.MessageContentWrapper>

			<S.MessageNavButtonWrapper>
				<Link to="/">
					<S.ArrowIcon src={ArrowUpIcon} alt="" />
					이전 메시지
				</Link>

				<Link to="/">
					<S.ArrowIcon src={ArrowDownIcon} alt="" />
					다음 메시지
				</Link>
			</S.MessageNavButtonWrapper>
		</S.MessageDetailContainer>
	);
};

export default MessageDetail;
