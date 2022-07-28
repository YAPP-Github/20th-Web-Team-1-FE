import React from 'react';
import AlertModalFrame from '../AlertModalFrame';
import * as S from './SuccessModal.styled';
import Button from '../../Button';
import { Props } from './SuccessModal.type';

const SuccessModal = ({ image, title, messages, buttonText, isSucceedSendMessage, handleCloseBtnClick }: Props) => {
	return (
		<AlertModalFrame onAlertModal={isSucceedSendMessage}>
			<S.SuccessModalContainer>
				<S.SuccessModalWrapper>
					<S.WateringImgWrapper>
						<S.WateringImg src={image} alt="" />
					</S.WateringImgWrapper>

					<S.MessageTitle>{title}</S.MessageTitle>

					<S.MessageDescWrapper>
						{messages.map((message, idx) => (
							<p key={`${message}-${idx}`}>{message}</p>
						))}
					</S.MessageDescWrapper>

					<S.ConfirmBtnWrapper>
						<Button type="button" bgColor="primary" fontWeight="bold" onClick={handleCloseBtnClick}>
							{buttonText}
						</Button>
					</S.ConfirmBtnWrapper>
				</S.SuccessModalWrapper>
			</S.SuccessModalContainer>
		</AlertModalFrame>
	);
};

export default SuccessModal;
