import styled from '@emotion/styled';

export const FolderSelect = styled.select`
	padding: 7px 14px;
	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.bt_white};
	font-size: ${({ theme }) => theme.fontSize.f10};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: ${({ theme }) => theme.lineHeight.lh10};
	letter-spacing: -0.01em;
	color: ${({ theme }) => theme.colors.bt_primary[200]};

	-o-appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&:-ms-expand {
		display: none;
	}

	& option {
		padding: 7px 0px;
		background: ${({ theme }) => theme.colors.bt_primary[200]};
		color: ${({ theme }) => theme.colors.bt_primary[200]};
	}
`;
