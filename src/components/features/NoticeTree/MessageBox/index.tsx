import React from 'react';
import * as S from './MessageBox.styled';
import { MessageBoxProps } from './MessageBox.type';
import AlertBee from '@/assets/images/noticeTree/alert_bee.svg';
import CancelIcon from '@/assets/images/noticeTree/cancel_icon.svg';
const MessageBox = ({ selectedMessage, showMessageHandler }: MessageBoxProps) => {
	return (
		<>
			{selectedMessage && (
				<S.MessageBoxWrapper>
					<S.MessageBoxInner>
						<S.MessageTitle>칭찬의 메시지 {selectedMessage.messageIndex}</S.MessageTitle>
						<S.MessageText> {selectedMessage.content} </S.MessageText>
						<S.CancelButton onClick={() => showMessageHandler(false)}>
							<img src={CancelIcon} alt="" />
						</S.CancelButton>
						<S.MessageWriterWrapper>
							<S.MessageWriterImage
								src={
									selectedMessage.senderProfileImage.includes('http') ? selectedMessage.senderProfileImage : AlertBee
								}
								alt="messageWriterImage"
							/>
							<S.MessageWriter>{selectedMessage.senderNickname || '익명의 꿀벌'}</S.MessageWriter>
						</S.MessageWriterWrapper>
					</S.MessageBoxInner>
				</S.MessageBoxWrapper>
			)}
		</>
	);
};

export default MessageBox;
