import { MessageType } from '@/pages/MessageBox/MessageBox.type';

export interface MessageContentProps {
	message: MessageType;
	checkMode: boolean;
	onToggleCheckMessage: (id: number) => void;
	checkMessages: number[];
}
