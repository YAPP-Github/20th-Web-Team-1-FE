import React from 'react';
import * as S from './AnonymousCheckBox.styled';
import { Props } from './AnonymousCheckBox.type';

const AnonymousCheckBox = ({ checked, handleToggleChecked }: Props) => {
	return (
		<S.CheckBoxContainer>
			<S.HiddenCheckBoxInput
				id="anonymous"
				type="checkbox"
				name="anonymous"
				checked={checked}
				onChange={handleToggleChecked}
			/>
			<S.CheckBoxInput checked={checked} onClick={handleToggleChecked}>
				<svg width="11" height="16" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.847656 3.26172L3.76562 6.15625L9.02734 0.90625L8.19531 0.0859375L3.76562 4.49219L1.66797 2.44141L0.847656 3.26172Z"
						fill="white"
					/>
				</svg>
			</S.CheckBoxInput>
			<S.CheckBoxLabel htmlFor="anonymous">익명으로 물 주기</S.CheckBoxLabel>
		</S.CheckBoxContainer>
	);
};

export default AnonymousCheckBox;
