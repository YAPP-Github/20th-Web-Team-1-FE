export type Props = {
	placeholder: string;
	autoFocus?: boolean;
	treeName: string | undefined;
	onChangeTreeName: (treeName: string) => void;
};
