import { MessageType } from '@/pages/MessageBox/MessageBox.type';

export interface MessageContentProps {
	message: MessageType;
	isEdit: boolean;
	onToggleCheckMessage: (id: number) => void;
	checkMessages: number[];
}
