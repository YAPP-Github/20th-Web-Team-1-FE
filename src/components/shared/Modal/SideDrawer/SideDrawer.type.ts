export type StyledProps = {
	show: boolean;
};

export type Props = {
	username: string;
	email: string;
	profileImg: string;
	onModal: boolean;
	setOnModal: (state: boolean) => void;
};
