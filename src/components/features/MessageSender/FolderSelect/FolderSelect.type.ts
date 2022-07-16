import { Folder } from '@/types/forest';

export type StyledProps = {
	opened: boolean;
};

export type Props = {
	folders: Folder[] | undefined;
	isOpenedFolderBox: boolean;
	onToggleSelectedFolderBox: () => void;
	selectedFolder: string | undefined;
	handleSelectedFolderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
