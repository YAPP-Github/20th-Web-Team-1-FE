import { MessageType } from '@/pages/NoticeTree/index.type';
export interface MessageBoxProps {
	selectedMessage: MessageType | null;
	showMessageHandler: (show: boolean) => void;
}
