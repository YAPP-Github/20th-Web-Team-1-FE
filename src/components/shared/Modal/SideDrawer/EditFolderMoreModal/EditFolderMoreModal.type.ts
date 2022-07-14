export type ModalPosition = {
	top: number;
	left: number;
};

export type StyledProps = {
	position: ModalPosition;
};

export type Props = {
	modalPosition: ModalPosition;
	onEditMoreModal: boolean;
	handleEditMoreModalClose: () => void;
	handleFolderDeleteAlertModalToggle: (state: 'open' | 'close') => void;
};
