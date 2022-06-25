import React from 'react';
import * as S from './SideDrawer.styled';
import ModalFrame from '../ModalFrame';
import { SideDrawerPropsType } from './type';

const SideDrawerView = ({ onModal, setOnModal }: SideDrawerPropsType) => {
	return (
		<ModalFrame onModal={onModal} setOnModal={setOnModal}>
			<S.SideDrawerContainer show={onModal}>
				<h1>상단 영역</h1>
			</S.SideDrawerContainer>
		</ModalFrame>
	);
};

export default SideDrawerView;
