import React from 'react';
import SideDrawerView from './SideDrawerView';
import { SideDrawerPropsType } from './type';

const SideDrawer = ({ onModal, setOnModal }: SideDrawerPropsType) => {
	return <SideDrawerView onModal={onModal} setOnModal={setOnModal} />;
};

export default SideDrawer;
