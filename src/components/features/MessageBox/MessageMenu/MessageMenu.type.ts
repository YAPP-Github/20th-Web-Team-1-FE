export interface MessageMenuProps {
	isEdit: boolean;
	editMakingToggleHandler?: (path: string) => void;
	onToggleOpenDrawer: () => void;
	deleteMessages: () => void;
	onToggleMovingFolderModal: () => void;
	treeName: string | undefined;
}
