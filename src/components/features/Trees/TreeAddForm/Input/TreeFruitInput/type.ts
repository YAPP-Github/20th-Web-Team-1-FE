export interface ChipStyledType {
	selected?: boolean;
}

interface TreeFruitInputType {
	fruitName: string;
	imgSrc: string;
	selected: boolean;
}

export interface TreeFruitInputModelType extends TreeFruitInputType {
	onChangeSelectedFruit: (fruit: string) => void;
}

export interface TreeFruitInputViewType extends TreeFruitInputType {
	onClick?: (event: React.MouseEvent) => void;
}
