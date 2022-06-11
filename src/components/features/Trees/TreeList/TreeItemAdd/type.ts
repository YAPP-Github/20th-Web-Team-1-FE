export interface TreeItemAddStyledType {
	size?: 'small' | 'large';
}

export interface TreeItemAddType extends TreeItemAddStyledType {
	onOpenForm: () => void;
}
