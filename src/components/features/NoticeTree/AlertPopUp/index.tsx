import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import { Link } from 'react-router-dom';
import AlertBee from '@/assets/images/noticeTree/alert_bee.svg';
import Forest from '@/assets/images/noticeTree/forest_btn.svg';
import { AlertPopUpProps } from './index.type';

const AlertPopUp = ({ username, messageCount, showAlertMessage }: AlertPopUpProps) => {
	const [openedAlertButton, setOpenedAlertButton] = useState(false);
	const [showAlert, setShowAlert] = useState(true);
	const showAlertHandler = () => {
		if (!showAlert) {
			setShowAlert(true);
		} else {
			setShowAlert(false);
		}
		setOpenedAlertButton(!openedAlertButton);
	};

	useEffect(() => {
		setTimeout(() => setShowAlert(false), 5000);
	}, []);
	return (
		<S.PopUpWrapper showAlert={showAlert}>
			<S.IconBox openedAlertButton={openedAlertButton}>
				<img src={AlertBee} alt="alertBee" onClick={showAlertHandler} />
				{openedAlertButton && (
					<Link to="/trees">
						<S.ForestWrapper>
							<S.ForestImage openedAlertButton={openedAlertButton} src={Forest} alt="ForestBtn" />
							<S.ForestText>나무숲 가기</S.ForestText>
						</S.ForestWrapper>
					</Link>
				)}
			</S.IconBox>

			<S.MessageBox showAlertMessage={showAlertMessage}>
				<S.NameText>안녕하세요 {username}님!</S.NameText>
				<S.AlertMessage>
					<span>{messageCount}개</span>의 열매가 새로 맺혔어요!
				</S.AlertMessage>
			</S.MessageBox>
		</S.PopUpWrapper>
	);
};

export default AlertPopUp;
