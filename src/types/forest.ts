export type Folder = {
	id: number;
	name: string;
	fruit: string;
};

export type Param = string | undefined;

export interface TreeDetailParam {
	treeId: Param;
	userId: Param;
}

export interface TreeDetailMessage {
	anonymous: boolean;
	content: string;
	id: number;
	senderNickname: string;
	senderProfileImage: string;
}

export interface TreeDetail {
	id: number;
	level: number;
	messages: TreeDetailMessage[];
	name: string;
	nextId: number;
	prevId: number;
}
