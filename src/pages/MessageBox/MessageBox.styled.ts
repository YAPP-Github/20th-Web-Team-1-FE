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

export const BackButtonContainer = styled.div`
	width: 100%;
	position: absolute;
	bottom: 30px;
	display: flex;
	justify-content: center;
`;

export const BackButton = styled.button`
	width: 326px;
	height: 50px;

	background: #eeeeee;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	border: none;

	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	color: #787878;
`;
