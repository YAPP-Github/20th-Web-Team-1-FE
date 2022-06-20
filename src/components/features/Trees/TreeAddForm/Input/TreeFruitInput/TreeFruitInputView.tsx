import React from 'react';
import * as S from './TreeFruitInput.styled';
import { TreeFruitInputViewType } from './type';

const TreeFruitInputView = ({ selected, imgSrc, fruitName, onClick }: TreeFruitInputViewType) => {
	return (
		<S.FruitInputContainer selected={selected}>
			<input type="radio" id={fruitName} name="fruit-radio" value={fruitName} onClick={onClick} />
			<label htmlFor={fruitName}>
				<span className="fruit-icon">
					<img src={imgSrc} alt={`${fruitName} 아이콘`} />
				</span>
				<span className="fruit-name">{fruitName}</span>
			</label>
		</S.FruitInputContainer>
	);
};

export default TreeFruitInputView;
