import styled from '@emotion/styled';

export const MenuButtonWrapper = styled.button`
	border: 0.5px solid ${({ theme }) => theme.colors.bt_grey[85]};
	border-radius: 5px;
	padding: 4px 10px;
	background-color: ${({ theme }) => theme.colors.bt_white};
	font-size: 12px;
	font-weight: ${({ theme }) => theme.fontWeight.normal};

	& + button {
		margin-left: 8px;
	}
`;
