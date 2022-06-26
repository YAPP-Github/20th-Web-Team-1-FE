import React from 'react';
import SideDrawerView from './SideDrawerView';
import ProfileIcon from '@/assets/images/noticeTree/alert_bee.svg';
import { SideDrawerPropsType } from './type';

const SideDrawer = ({ onModal, setOnModal }: SideDrawerPropsType) => {
	return (
		<SideDrawerView
			profileImgSrc={ProfileIcon}
			username={'닉네임'}
			email={'abc@gmail.com'}
			onModal={onModal}
			setOnModal={setOnModal}
		/>
	);
};

export default SideDrawer;
