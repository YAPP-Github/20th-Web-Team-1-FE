export interface ButtonStyledType {
	width?: string;
	bgColor?: 'primary' | 'normal';
	fontWeight: 'thin' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold';
}

export interface ButtonType extends ButtonStyledType {
	type: 'button' | 'submit';
	onClick?: () => void;
	children: React.ReactNode;
}
