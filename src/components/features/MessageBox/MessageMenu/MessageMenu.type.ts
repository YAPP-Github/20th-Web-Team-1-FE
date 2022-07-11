export interface MessageMenuProps {
	isEdit: boolean;
	setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
	onToggleOpenDrawer: () => void;
	deleteMessages: () => void;
	onToggleMovingFolderModal: () => void;
}
