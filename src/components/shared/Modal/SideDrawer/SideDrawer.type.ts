import { ModalPosition } from './EditFolderMoreModal/EditFolderMoreModal.type';

export type StyledProps = {
	show: boolean;
};

export type Props = {
	username: string;
	email: string;
	profileImg: string;
	handleFolderDeleteAlertModalToggle: (state: 'open' | 'close') => void;
	onModal: boolean;
	setOnModal: (state: boolean) => void;
	onEditMoreModal: boolean;
	modalPosition: ModalPosition;
	handleEditMoreModalOpen: (event: React.MouseEvent<HTMLElement>) => void;
	handleEditMoreModalClose: () => void;
};
