export interface BottomButtonsProps {
	isEdit: boolean;
	isMakingFruit: boolean;
	checkMessages: number[];
	getMessageList: () => Promise<void>;
	setShowCheckedMessages: React.Dispatch<React.SetStateAction<boolean>>;
	editMakingToggleHandler: (path: string) => void;
	setIsMakingFruit: React.Dispatch<React.SetStateAction<boolean>>;
}
