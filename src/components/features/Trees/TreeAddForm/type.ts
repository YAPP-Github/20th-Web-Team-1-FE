export interface TreeAddFormViewType {
	treeName: string;
	selectedFruit: string;
	onChangeTreeName: (treeName: string) => void;
	onChangeSelectedFruit: (fruit: string) => void;
	onSubmitEditedTreeInfo: (event: React.FormEvent) => void;
	onGoBackClick: () => void;
}
