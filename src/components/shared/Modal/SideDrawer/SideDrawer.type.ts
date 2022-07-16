import { ModalPosition } from './EditFolderMoreModal/EditFolderMoreModal.type';
import { Folder } from '@/types/forest';

export type StyledProps = {
	show: boolean;
};

export type Props = {
	trees: Folder[] | undefined;
	onModal: boolean;
	setOnModal: (state: boolean) => void;
	modalPosition: ModalPosition;
	onEditMoreModal: boolean;
	handleEditMoreModalOpen: (event: React.MouseEvent<HTMLElement>) => void;
	handleEditMoreModalClose: () => void;
	handleFolderDeleteAlertModalToggle: (state: 'open' | 'close') => void;
	onClickTreeFolderMoreMenuButton: (treeId: number) => void;
};
