import React, { useState, useEffect } from 'react';
import * as S from './AlertPopUp.styled';
import { Link } from 'react-router-dom';
import AlertBee from '@/assets/images/noticeTree/alert_bee.png';
import Forest from '@/assets/images/noticeTree/forest_btn.svg';
import { AlertPopUpProps } from './AlertPopUp.type';

const AlertPopUp = ({ username, messageCount, showAlertMessage, activeHomeAlert }: AlertPopUpProps) => {
	const [openedAlertButton, setOpenedAlertButton] = useState(false);
	const [showAlert, setShowAlert] = useState(true);
	const showAlertHandler = () => {
		if (!showAlert && !openedAlertButton) {
			setShowAlert(true);
			setTimeout(() => {
				setOpenedAlertButton(true);
			}, 500);
			return;
		}

		if (openedAlertButton) {
			setOpenedAlertButton(false);
			return;
		}

		if (showAlert) {
			setOpenedAlertButton(!openedAlertButton);
			return;
		}
	};

	useEffect(() => {
		const alertTimer = setTimeout(() => {
			setShowAlert(false);
		}, 5000);

		return () => {
			clearTimeout(alertTimer);
		};
	}, [showAlert]);

	useEffect(() => {
		const forestButtonTimer = setTimeout(() => {
			setOpenedAlertButton(false);
		}, 3000);

		return () => {
			clearTimeout(forestButtonTimer);
		};
	}, [openedAlertButton]);

	useEffect(() => {
		if (activeHomeAlert) {
			setShowAlert(true);
			const closeAlertTimer = setTimeout(() => {
				setShowAlert(false);
			}, 5000);
			return () => {
				clearTimeout(closeAlertTimer);
			};
		}
	}, [activeHomeAlert]);

	return (
		<S.PopUpWrapper showAlert={showAlert}>
			<S.IconBox openedAlertButton={openedAlertButton}>
				<S.AlertIcon src={AlertBee} alt="alertBee" onClick={showAlertHandler} />
				{openedAlertButton && (
					<Link to="/forest">
						<S.ForestWrapper>
							<S.ForestImage openedAlertButton={openedAlertButton} src={Forest} alt="ForestBtn" />
							<S.ForestText>나무숲 가기</S.ForestText>
						</S.ForestWrapper>
					</Link>
				)}
			</S.IconBox>

			<S.MessageBox showAlertMessage={showAlertMessage}>
				{activeHomeAlert ? (
					<>
						<S.NameText> 오늘의 메세지를 모두 확인했어요! </S.NameText>
						<S.AlertMessage>메세지함에서 나머지 {messageCount}개를 확인하세요!</S.AlertMessage>
					</>
				) : (
					<>
						<S.NameText>안녕하세요 {username}님!</S.NameText>
						<S.AlertMessage>
							<span>{messageCount}개</span>의 열매가 새로 맺혔어요!
						</S.AlertMessage>
					</>
				)}
			</S.MessageBox>
		</S.PopUpWrapper>
	);
};

export default AlertPopUp;
