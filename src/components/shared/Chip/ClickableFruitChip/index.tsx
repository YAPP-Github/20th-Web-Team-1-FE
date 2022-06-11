import React from 'react';
import ClickableFruitChipView from './ClickableFruitView';
import { ClickableFruitChipType } from './type';

const ClickableFruitChip = ({ fruitName, imgSrc, selected, onChangeSelectedFruit }: ClickableFruitChipType) => {
	const onClickChip = (event: React.MouseEvent) => {
		const targetFruit = (event.target as HTMLInputElement).value;

		if (targetFruit) {
			onChangeSelectedFruit(targetFruit);
		}
	};

	return <ClickableFruitChipView fruitName={fruitName} imgSrc={imgSrc} selected={selected} onClick={onClickChip} />;
};

export default ClickableFruitChip;
