export interface TreeAddFormType {
	onCloseForm: () => void;
}

export interface TreeAddFormViewType extends TreeAddFormType {
	selectedFruit: string;
	onChangeSelectedFruit: (fruit: string) => void;
}
