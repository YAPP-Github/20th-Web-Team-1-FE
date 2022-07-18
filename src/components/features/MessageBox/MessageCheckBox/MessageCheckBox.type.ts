export interface CheckedProps {
	checked: boolean;
}

export interface MessageWrapperProps extends CheckedProps {
	idx: number;
}

export interface MessageCheckBoxProps extends CheckedProps {
	id: number;
	handleToggleChecked: (id: number) => void;
}
