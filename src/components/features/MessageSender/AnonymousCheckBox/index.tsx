import React from 'react';
import AnonymousCheckBoxView from './AnonymousCheckBoxView';
import { AnonymousCheckBoxPropsType } from './type';

const AnonymousCheckBox = ({ checked, handleToggleChecked }: AnonymousCheckBoxPropsType) => {
	return <AnonymousCheckBoxView checked={checked} handleToggleChecked={handleToggleChecked} />;
};

export default AnonymousCheckBox;
