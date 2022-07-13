export type StyledProps = {
	show: boolean;
};

export type Props = {
	children: React.ReactNode;
	onModal: boolean;
	setOnModal: (state: boolean) => void;
};
