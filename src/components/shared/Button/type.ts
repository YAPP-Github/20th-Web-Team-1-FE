export interface ButtonStyledType {
	width?: string;
	bgColor?: 'primary' | 'normal';
}

export interface ButtonType extends ButtonStyledType {
	type: 'button' | 'submit';
	onClick: () => void;
	children: React.ReactNode;
}
