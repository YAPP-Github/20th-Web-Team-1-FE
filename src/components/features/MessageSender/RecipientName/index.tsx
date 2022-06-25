import React from 'react';
import RecipientNameView from './RecipientNameView';
import { RecipientNamePropsType } from './type';

const RecipientName = ({ name }: RecipientNamePropsType) => {
	return <RecipientNameView name={name} />;
};

export default RecipientName;
