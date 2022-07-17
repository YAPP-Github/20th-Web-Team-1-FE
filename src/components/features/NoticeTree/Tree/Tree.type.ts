import { MessageWithLocationType } from '@/pages/NoticeTree/NoticeTree.type';

export interface TreeProps {
	updateReadMessageHandler: (messageId: number, selectedIdx: number) => void;
	messages: MessageWithLocationType[] | null;
}

export interface FruitProps {
	innerWidth: string;
	innerHeight: string;
}

export interface getMessageParam {
	messageId: number;
	idx: number;
}
