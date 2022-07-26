export interface AlertModalProps {
	isOpen: boolean;
	modalTitle?: string;
	modalMainImage: string;
	modalDescMessages: string[];
	buttonTitle: string;
	handleCloseBtnClick: () => void;
	handleMainBtnClick: () => void;
}

export interface StyledProps {
	modalTitle?: string;
}
