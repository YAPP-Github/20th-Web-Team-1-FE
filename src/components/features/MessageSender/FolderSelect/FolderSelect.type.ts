export type StyledProps = {
	opened: boolean;
};

export type Props = {
	folders: string[];
	isOpenedFolderBox: boolean;
	onToggleSelectedFolderBox: () => void;
	selectedFolder: string;
	handleSelectedFolderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
