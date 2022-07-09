import React from 'react';
import * as S from './RecipientName.styled';
import { Props } from './RecipientName.type';

const RecipientName = ({ name }: Props) => {
	return <S.RecipientNameContainer>To. {name}</S.RecipientNameContainer>;
};

export default RecipientName;
