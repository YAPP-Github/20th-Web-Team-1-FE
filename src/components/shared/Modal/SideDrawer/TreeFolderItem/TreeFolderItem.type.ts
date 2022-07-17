import { Folder } from '@/types/forest';

export type Props = {
	folder: Folder;
	handleEditMoreModalOpen: (event: React.MouseEvent<HTMLElement>) => void;
	onClickTreeFolderMoreMenuButton: (treeId: number) => void;
	onCloseSideDrawer: () => void;
};
