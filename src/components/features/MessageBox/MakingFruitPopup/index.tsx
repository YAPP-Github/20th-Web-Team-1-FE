import React from 'react';
import * as S from './MakingFruitPopup.styled';
import AlertBee from '@/assets/images/noticeTree/alert_bee.png';

const MakingFruitPopup = () => {
	return (
		<S.PopUpWrapper>
			<S.IconBox>
				<img src={AlertBee} alt="alertBee" />
			</S.IconBox>

			<S.MessageBox>
				<S.NameText>열매를 맺으실 건가요?</S.NameText>
				<S.AlertMessage>열매 맺을 메세지를 선택해주세요.</S.AlertMessage>
			</S.MessageBox>
		</S.PopUpWrapper>
	);
};

export default MakingFruitPopup;
