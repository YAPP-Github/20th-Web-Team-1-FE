import React from 'react';
import * as S from './RecipientName.styled';
import { RecipientNamePropsType } from './type';

const RecipientNameView = ({ name }: RecipientNamePropsType) => {
	return <S.RecipientNameContainer>To. {name}</S.RecipientNameContainer>;
};

export default RecipientNameView;
