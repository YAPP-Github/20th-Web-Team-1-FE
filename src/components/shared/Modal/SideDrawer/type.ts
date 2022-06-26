export type SideDrawerStyledPropType = {
	show: boolean;
};

export type SideDrawerPropsType = {
	onModal: boolean;
	setOnModal: (state: boolean) => void;
};

export type SideDrawerViewPropsType = {
	profileImgSrc: string;
	username: string;
	email: string;
	onModal: boolean;
	setOnModal: (state: boolean) => void;
};
