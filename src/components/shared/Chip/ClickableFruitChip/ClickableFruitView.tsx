import React from 'react';
import * as S from './ClickableFruitChip.styled';
import { ClickableFruitChipViewType } from './type';

const ClickableFruitChipView = ({ selected, imgSrc, fruitName, onClick }: ClickableFruitChipViewType) => {
	return (
		<S.ChipContainer selected={selected}>
			<input type="radio" id={fruitName} name="fruit-radio" value={fruitName} onClick={onClick} />
			<label htmlFor={fruitName}>
				<span className="fruit-icon">
					<img src={imgSrc} alt={`${fruitName} 아이콘 이미지`} />
				</span>
				<span className="fruit-name">{fruitName}</span>
			</label>
		</S.ChipContainer>
	);
};

export default ClickableFruitChipView;
