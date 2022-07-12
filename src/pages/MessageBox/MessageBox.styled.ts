import styled from '@emotion/styled';

export const Wrapper = styled.div`
	height: calc(100vh - 85px);
	background: #f5fcff;
	position: relative;
	overflow: hidden;
`;

export const MessageListContainer = styled.div<{ isEdit: boolean }>`
	height: calc(100vh - 240px);

	overflow: scroll;
	padding-bottom: ${({ isEdit }) => (isEdit ? '100px' : '0px')};

	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;
