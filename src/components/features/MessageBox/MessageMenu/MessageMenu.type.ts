export interface MessageMenuProps {
	isEdit: boolean;
	detailTreeName?: string;
	editMakingToggleHandler?: (path: string) => void;
	onToggleOpenDrawer: () => void;
	deleteMessages: () => void;
	onToggleMovingFolderModal: () => void;
}
