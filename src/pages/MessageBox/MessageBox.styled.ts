import styled from '@emotion/styled';
import { MessageListContainerProps } from './MessageBox.type';
export const Wrapper = styled.div`
	height: calc(100vh - 85px);
	background: #f5fcff;
	position: relative;
	overflow: hidden;
`;

export const MessageListContainer = styled.div<MessageListContainerProps>`
	height: calc(100vh - ${({ isMakingFruit }) => (isMakingFruit ? '315px' : '240px')});

	overflow: scroll;
	padding-bottom: ${({ checkMode }) => (checkMode ? '100px' : '0px')};

	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;
