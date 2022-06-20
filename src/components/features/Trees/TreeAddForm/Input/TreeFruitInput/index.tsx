import React from 'react';
import TreeFruitInputView from './TreeFruitInputView';
import { TreeFruitInputModelType } from './type';

const TreeFruitInput = ({ fruitName, imgSrc, selected, onChangeSelectedFruit }: TreeFruitInputModelType) => {
	const onClick = (event: React.MouseEvent) => {
		const targetFruit = (event.target as HTMLInputElement).value;

		if (targetFruit) {
			onChangeSelectedFruit(targetFruit);
		}
	};

	return <TreeFruitInputView fruitName={fruitName} imgSrc={imgSrc} selected={selected} onClick={onClick} />;
};

export default TreeFruitInput;
