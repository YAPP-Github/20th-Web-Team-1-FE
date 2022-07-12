export type StyledProps = {
	selected: boolean;
};

export type Fruit = {
	name: string;
	value: string;
	imgSrc: string;
};

export type Props = {
	fruit: Fruit;
	selected: boolean;
	onChangeSelectedFruit: (fruit: string) => void;
};
