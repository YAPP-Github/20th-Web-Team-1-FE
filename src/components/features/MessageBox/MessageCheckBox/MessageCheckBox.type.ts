export interface CheckedProps {
	checked: boolean;
}

export interface MessageCheckBoxProps extends CheckedProps {
	id: number;
	handleToggleChecked: (id: number) => void;
}
