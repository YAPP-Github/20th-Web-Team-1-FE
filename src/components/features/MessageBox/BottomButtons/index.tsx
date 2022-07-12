import React from 'react';
import * as S from './BottomButtons.styled';
import { BottomButtonsProps } from './BottomButtons.type';

const BottomButtons = ({ isEdit, isMakingFruit, editMakingToggleHandler }: BottomButtonsProps) => {
	return (
		<S.BackButtonContainer>
			{isEdit && <S.LongButton onClick={() => editMakingToggleHandler('back')}>뒤로가기</S.LongButton>}
			{isMakingFruit && (
				<>
					<S.ShortButton onClick={() => editMakingToggleHandler('back')}>뒤로가기</S.ShortButton>
					<S.ShortGreenButton onClick={() => console.log('save')}>저장하기</S.ShortGreenButton>
				</>
			)}
		</S.BackButtonContainer>
	);
};

export default BottomButtons;
