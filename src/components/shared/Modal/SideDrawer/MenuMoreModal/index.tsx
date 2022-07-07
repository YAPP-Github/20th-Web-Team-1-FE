import React from 'react';
import MenuMoreModalView from './MenuMoreModalView';
import { MenuMoreModalPropsType } from './type';

const MenuMoreModal = ({ setOnMenuMoreModal }: MenuMoreModalPropsType) => {
	return <MenuMoreModalView setOnMenuMoreModal={setOnMenuMoreModal} />;
};

export default MenuMoreModal;
