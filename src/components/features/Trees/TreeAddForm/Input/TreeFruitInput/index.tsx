import React from 'react';
import * as S from './TreeFruitInput.styled';
import { Props } from './TreeFruitInput.type';

const TreeFruitInput = ({ fruitName, imgSrc, selected, onChangeSelectedFruit }: Props) => {
	const onClick = (event: React.MouseEvent) => {
		const targetFruit = (event.target as HTMLInputElement).value;

		if (targetFruit) {
			onChangeSelectedFruit(targetFruit);
		}
	};

	return (
		<S.FruitInputContainer>
			<input type="radio" id={fruitName} name="fruit-radio" value={fruitName} onClick={onClick} />
			<S.FruitInputLabel htmlFor={fruitName} selected={selected}>
				<span>
					<img src={imgSrc} alt={`${fruitName} 아이콘`} />
				</span>
				<span>{fruitName}</span>
			</S.FruitInputLabel>
		</S.FruitInputContainer>
	);
};

export default TreeFruitInput;
