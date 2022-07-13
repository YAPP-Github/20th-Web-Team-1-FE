import React from 'react';
import ModalFrame from '../ModalFrame';
import * as S from './AlertModal.styled';
import Button from '../../Button';
import { AlertModalProps } from './AlertModal.type';

const AlertModal = ({
	isOpen,
	modalTitle,
	modalMainImage,
	modalDescMessages,
	buttonTitle,
	handleCloseBtnClick,
	handleMainBtnClick,
}: AlertModalProps) => {
	return (
		<ModalFrame onModal={isOpen} setOnModal={handleCloseBtnClick}>
			<S.ModalContainer>
				<S.ModalWrapper>
					<S.WateringImgWrapper>
						<S.WateringImg src={modalMainImage} alt="" />
					</S.WateringImgWrapper>

					<S.MessageTitle>{modalTitle}</S.MessageTitle>

					<S.MessageDescWrapper>
						{modalDescMessages.map((message, idx) => (
							<p key={`modalTitle-modal-desc-message-${idx}`}>{message}</p>
						))}
					</S.MessageDescWrapper>
					<S.ConfirmBtnContainer>
						<S.ConfirmBtnWrapper>
							<Button type="button" bgColor="normal" fontWeight="bold" onClick={handleCloseBtnClick}>
								취소하기
							</Button>
						</S.ConfirmBtnWrapper>
						<S.ConfirmRightBtnWrapper>
							<Button type="button" bgColor="primary" fontWeight="bold" onClick={handleMainBtnClick}>
								{buttonTitle}
							</Button>
						</S.ConfirmRightBtnWrapper>
					</S.ConfirmBtnContainer>
				</S.ModalWrapper>
			</S.ModalContainer>
		</ModalFrame>
	);
};

export default AlertModal;
