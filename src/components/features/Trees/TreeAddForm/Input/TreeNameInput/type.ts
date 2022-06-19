interface InputType {
	placeholder?: string;
	autoFocus?: boolean;
}

export interface TreeNameInputModelType extends InputType {
	treeName: string;
	onChangeTreeName: (treeName: string) => void;
}

export interface TreeNameInputViewType extends InputType {
	treeName: string;
	onChange: (event: React.FormEvent<HTMLFormElement>) => void;
}
