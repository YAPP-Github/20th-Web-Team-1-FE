export interface MessageType {
	anonymous: boolean;
	content?: string;
	id: number;
	senderNickname: string;
	senderProfileImage: string;
}

export interface MessageWithLocationType extends MessageType {
	width: number;
	height: number;
	messageIndex?: number;
}

export interface MessagesType {
	messages: MessageWithLocationType[];
	totalUnreadMessageCount: number;
}
