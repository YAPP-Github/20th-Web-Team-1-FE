import React from 'react';
import ModalFrame from '../ModalFrame';
import * as S from './SuccessModal.styled';
import WateringIcon from '@/assets/images/noticeTree/watering_icon.svg';
import Button from '../../Button';
import { Props } from './SuccessModal.type';

const SuccessModal = ({ isSucceedSendMessage, handleCloseBtnClick }: Props) => {
	return (
		<ModalFrame onModal={isSucceedSendMessage} setOnModal={handleCloseBtnClick}>
			<S.SuccessModalContainer>
				<S.SuccessModalWrapper>
					<S.WateringImgWrapper>
						<S.WateringImg src={WateringIcon} alt="" />
					</S.WateringImgWrapper>

					<S.MessageTitle>물 주기 완료!</S.MessageTitle>

					<S.MessageDescWrapper>
						<p>따듯한 메시지를 무사히 전달했어요.</p>
						<p>덕분에 나무가 한 뼘 자라날 수 있게 되었어요!</p>
					</S.MessageDescWrapper>

					<S.ConfirmBtnWrapper>
						<Button type="button" bgColor="primary" fontWeight="bold" onClick={handleCloseBtnClick}>
							닫기
						</Button>
					</S.ConfirmBtnWrapper>
				</S.SuccessModalWrapper>
			</S.SuccessModalContainer>
		</ModalFrame>
	);
};

export default SuccessModal;
