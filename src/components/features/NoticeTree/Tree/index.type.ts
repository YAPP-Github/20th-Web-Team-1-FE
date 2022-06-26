type Message = {
	id: string;
	width: number;
	height: number;
};
type MessagesType = Message[];

export interface TreeProps {
	removeFruit: (idx: number) => void;
	messages: MessagesType | null;
}

export interface FruitProps {
	innerWidth: string;
	innerHeight: string;
}
