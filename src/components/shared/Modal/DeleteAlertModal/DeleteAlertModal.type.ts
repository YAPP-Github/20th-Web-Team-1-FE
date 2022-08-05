export type Props = {
	deleteTargetType: 'folder' | 'message';
	deleteTarget: string | undefined;
	onAlertModal: boolean;
	handleAlertModalToggle: () => void;
	handleTargetDelete: () => void;
};
