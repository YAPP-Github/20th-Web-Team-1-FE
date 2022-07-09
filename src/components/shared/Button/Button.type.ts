export interface StyledProps {
	width?: string;
	bgColor?: 'primary' | 'normal';
	fontWeight?: 'thin' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold';
}

export type Props = {
	type: 'button' | 'submit';
	onClick?: () => void;
	children: React.ReactNode;
} & StyledProps;
