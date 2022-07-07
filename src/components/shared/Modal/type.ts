export type ModalBackDropStyledPropsType = {
	show: boolean;
};

export type ModalFramePropsType = {
	children: React.ReactNode;
	onModal: boolean;
	setOnModal: (state: boolean) => void;
};
