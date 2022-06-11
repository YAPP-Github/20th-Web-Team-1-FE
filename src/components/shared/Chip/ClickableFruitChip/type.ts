export interface ChipStyledType {
	selected?: boolean;
}

export interface ClickableFruitChipViewType {
	fruitName: string;
	imgSrc: string;
	selected: boolean;
	onClick?: (event: React.MouseEvent) => void;
}

export interface ClickableFruitChipType {
	fruitName: string;
	imgSrc: string;
	selected: boolean;
	onChangeSelectedFruit: (fruit: string) => void;
}
