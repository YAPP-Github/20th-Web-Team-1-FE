import React from 'react';
import * as S from './TreeFruitInput.styled';
import { Props } from './TreeFruitInput.type';

const TreeFruitInput = ({ fruit, selected, onChangeSelectedFruit }: Props) => {
	const { name, value, imgSrc } = fruit;

	const onClick = (event: React.MouseEvent) => {
		const targetFruit = (event.target as HTMLInputElement).value;

		if (targetFruit) {
			onChangeSelectedFruit(targetFruit);
		}
	};

	return (
		<S.FruitInputContainer>
			<input type="radio" id={name} name="fruit-radio" value={value} onClick={onClick} />
			<S.FruitInputLabel htmlFor={name} selected={selected}>
				<span>
					<img src={imgSrc} alt={`${name} 아이콘`} />
				</span>
				<span>{name}</span>
			</S.FruitInputLabel>
		</S.FruitInputContainer>
	);
};

export default TreeFruitInput;
