import { MessageWithLocationType } from '@/pages/NoticeTree/NoticeTree.type';
export interface MessageBoxProps {
	selectedMessage: MessageWithLocationType | null;
	showMessageHandler: (show: boolean) => void;
}
