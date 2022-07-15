export interface MessageType {
	alreadyRead: boolean;
	anonymous: boolean;
	content?: string;
	createdDate: string;
	favorite: boolean;
	id: number;
	opening: boolean;
	senderNickname: string;
	senderProfileImage: string;
}

export interface MessagesType {
	hasNext: boolean;
	responseDto: MessageType[];
}

export interface MessageListContainerProps {
	checkMode: boolean;
	isMakingFruit: boolean;
}
