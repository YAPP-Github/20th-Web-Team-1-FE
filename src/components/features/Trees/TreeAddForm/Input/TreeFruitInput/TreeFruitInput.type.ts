export type StyledProps = {
	selected: boolean;
};

export type Props = {
	selected: boolean;
	fruitName: string;
	imgSrc: string;
	onChangeSelectedFruit: (fruit: string) => void;
};
