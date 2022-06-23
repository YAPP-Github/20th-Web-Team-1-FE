export type MessageType = {
	id: string;
	message: string;
	writer: string | null;
	width: number;
	height: number;
};
export type MessagesType = MessageType[];
