import styled from '@emotion/styled';

export const MessageInput = styled.textarea`
	width: 100%;
	height: 435px;
	padding: 30px;
	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.bt_primary[20]};
	font-size: ${({ theme }) => theme.fontSize.f14};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: 24px;
	color: ${({ theme }) => theme.colors.bt_grey[100]};
	letter-spacing: -0.02em;
	resize: none;

	&:focus:not(:focus-visible) {
		border: 0;
		outline: none;
	}

	&:focus-visible {
		outline: 0px solid ${({ theme }) => theme.colors.bt_primary[200]};
	}
`;
