import React from 'react';
import * as S from './AnonymousCheckBox.styled';

const AnonymousCheckBoxView = () => {
	return (
		<S.CheckBoxContainer>
			<S.CheckBoxInput id="anonymous" type="checkbox" name="anonymous" />
			<S.CheckBoxLabel htmlFor="anonymous">익명으로 물 주기</S.CheckBoxLabel>
		</S.CheckBoxContainer>
	);
};

export default AnonymousCheckBoxView;
