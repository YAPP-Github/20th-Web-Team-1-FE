import { Tree } from './TreeItem/TreeItem.type';

export type TreeItem = {
	id: number;
} & Tree;

export type Props = {
	trees: TreeItem[];
};
