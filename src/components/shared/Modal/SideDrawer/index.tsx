import React, { useState } from 'react';
import SideDrawerView from './SideDrawerView';
import ProfileIcon from '@/assets/images/noticeTree/alert_bee.svg';
import { SideDrawerPropsType } from './type';

const SideDrawer = ({ onModal, setOnModal }: SideDrawerPropsType) => {
	const [onMenuMoreModal, setOnMenuMoreModal] = useState(false);

	return (
		<SideDrawerView
			profileImgSrc={ProfileIcon}
			username={'닉네임'}
			email={'abc@gmail.com'}
			onModal={onModal}
			onMenuMoreModal={onMenuMoreModal}
			setOnModal={setOnModal}
			setOnMenuMoreModal={setOnMenuMoreModal}
		/>
	);
};

export default SideDrawer;
