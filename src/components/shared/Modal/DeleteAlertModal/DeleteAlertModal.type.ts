export type Props = {
	deleteTargetType: 'folder' | 'message';
	deleteTarget: string;
	onAlertModal: boolean;
	handleAlertModalToggle: () => void;
	handleTargetDelete: () => void;
};
