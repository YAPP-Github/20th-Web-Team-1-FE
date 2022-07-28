import styled from '@emotion/styled';

export const Container = styled.div`
	margin: 0 32px;
`;

export const Background = styled.div`
	width: 100%;
	height: 70.5px;
	background-color: ${({ theme }) => theme.colors.bt_white};
`;

export const MessageSenderContainer = styled.form`
	position: relative;
	height: calc(100vh - 155.5px);
	padding-bottom: 30px;
	overflow: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const MessageInputWrapper = styled.div`
	margin-top: 46px;
`;

export const AnonymousCheckBoxWrapper = styled.div`
	margin-top: 33px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 14px;
	margin-top: 36px;
`;
