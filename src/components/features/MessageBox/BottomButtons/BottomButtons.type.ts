export interface BottomButtonsProps {
	isEdit: boolean;
	isMakingFruit: boolean;
	checkMessages: number[];
	setShowCheckedMessages: React.Dispatch<React.SetStateAction<boolean>>;
	editMakingToggleHandler: (path: string) => void;
}
