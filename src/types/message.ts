export interface Message {
	alreadyRead: boolean;
	anonymous: boolean;
	content: string;
	createdDate: string;
	favorite: boolean;
	id: number;
	opening: boolean;
	senderNickname: string;
	senderProfileImage: string;
}

export interface TreeInfo {
	fruit: string;
	id: number;
	name: string;
	opening: boolean;
}

export interface MessageDetailData {
	nextId: number;
	prevId: number;
	responseDto: Message;
	treeResponseDto: TreeInfo;
}

export type MessageIdType = number | string | undefined;

export interface MessagesType {
	hasNext: boolean;
	responseDto: Message[];
}

export interface PostMessageData {
	anonymous: boolean;
	content: string;
	folderId: number | null;
	receiverId: number;
}

export interface MessageParams {
	treeId: MessageIdType;
	currentPage: number;
}
