import styled from '@emotion/styled';

export const MessageInput = styled.textarea`
	width: 100%;
	height: 100%;
	padding: 30px;
	overflow: auto;

	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: ${({ theme }) => theme.fontSize.f14};
	line-height: 24px;
	word-break: break-all;
	white-space: pre-wrap;

	background: ${({ theme }) => theme.colors.bt_primary[20]};

	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 20px;

	&:focus:not(:focus-visible) {
		border: 0;
		outline: none;
	}

	&:focus-visible {
		outline: 0px solid ${({ theme }) => theme.colors.bt_primary[200]};
	}
`;
