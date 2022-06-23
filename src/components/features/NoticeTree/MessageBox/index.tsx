import React from 'react';
import * as S from './index.styled';
import { MessageBoxProps } from './index.type';
import AlertBee from '@/assets/images/noticeTree/alert_bee.svg';

const MessageBox = ({ selectedMessage, showMessageHandler }: MessageBoxProps) => {
	return (
		<>
			{selectedMessage && (
				<S.MessageBoxWrapper>
					<S.MessageBoxInner>
						<S.MessageText> {selectedMessage.message} </S.MessageText>
						<S.CancleIcon onClick={() => showMessageHandler(false)}>X</S.CancleIcon>
						<S.MessageWriterWrapper>
							<S.MessageWriterImage src={AlertBee} alt="messageWriterImage" />
							<S.MessageWriter> {selectedMessage.writer ? selectedMessage.writer : '익명의 꿀벌'}</S.MessageWriter>
						</S.MessageWriterWrapper>
					</S.MessageBoxInner>
				</S.MessageBoxWrapper>
			)}
		</>
	);
};

export default MessageBox;
