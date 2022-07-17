import { MessageType } from '@/pages/MessageBox/MessageBox.type';

export interface MessageContentProps {
	message: MessageType;
	checkMode: boolean;
	idx: number;
	onToggleCheckMessage: (id: number) => void;
	checkMessages: number[];
}
