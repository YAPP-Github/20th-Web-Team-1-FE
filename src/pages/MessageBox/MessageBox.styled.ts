import styled from '@emotion/styled';
import { MessageListContainerProps } from './MessageBox.type';
export const Wrapper = styled.div`
	height: calc(100vh - 85px);
	background: #f5fcff;
	position: relative;
	overflow: hidden;
`;

export const MessageListContainer = styled.div<MessageListContainerProps>`
	height: calc(100vh - ${({ isMakingFruit }) => (isMakingFruit ? '305px' : '230px')});

	overflow: scroll;
	padding-bottom: ${({ checkMode }) => (checkMode ? '100px' : '0px')};

	background-color: white;

	border-radius: 20px 20px 0px 0px;
	box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);

	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;
