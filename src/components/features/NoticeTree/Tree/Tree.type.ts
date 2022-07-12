import { MessageWithLocationType } from '@/pages/NoticeTree/NoticeTree.type';

export interface TreeProps {
	readNoticeMessage: (messageId: number, selectedIdx: number) => void;
	messages: MessageWithLocationType[] | null;
}

export interface FruitProps {
	innerWidth: string;
	innerHeight: string;
}
