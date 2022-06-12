export interface TreeAddFormType {
	onCloseForm: () => void;
}

export interface TreeAddFormViewType extends TreeAddFormType {
	treeName: string;
	selectedFruit: string;
	onChangeTreeName: (treeName: string) => void;
	onChangeSelectedFruit: (fruit: string) => void;
	onSubmitEditedTreeInfo: (event: React.FormEvent) => void;
}
