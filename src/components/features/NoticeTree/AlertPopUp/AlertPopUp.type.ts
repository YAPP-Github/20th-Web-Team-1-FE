export interface IconBoxProps {
	showAlert: boolean;
}
export interface MessageBoxProps {
	showAlertMessage: boolean;
}
export interface OpenAlertProps {
	openedAlertButton: boolean;
}

export interface AlertPopUpProps {
	username: string;
	messageCount: number | null;
	showAlertMessage: boolean;
	activeHomeAlert: boolean;
}
