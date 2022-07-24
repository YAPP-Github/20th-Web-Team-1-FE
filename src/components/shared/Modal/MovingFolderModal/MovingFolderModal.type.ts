export interface MovingFolderModalProps {
	isMoving: boolean;
	checkMessages: number[];
	setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
	onToggleMovingFolderModal: () => void;
	getMessageList?: () => Promise<void>;
	handleAfterAction?: () => void;
}
