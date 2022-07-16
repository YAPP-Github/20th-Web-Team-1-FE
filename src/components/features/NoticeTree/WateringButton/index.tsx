import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './WateringButton.styled';
import WateringIcon from '@/assets/images/noticeTree/watering_icon.svg';

const WateringButton = () => {
	return (
		<Link to="/message/edit">
			<S.Wrapper>
				<S.ImageWrapper>
					<img src={WateringIcon} alt="watering_icon" />
				</S.ImageWrapper>
				<span>물주기</span>
			</S.Wrapper>
		</Link>
	);
};

export default WateringButton;
