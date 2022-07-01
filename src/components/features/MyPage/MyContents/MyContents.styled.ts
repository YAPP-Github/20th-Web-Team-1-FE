import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type StyledProps = {
	color: 'primary' | 'grey';
};

export const MyContentsContainer = styled.div`
	padding: 0px 32px 134px 32px;
	display: flex;
	flex-direction: column;
`;

export const MyMenuButton = styled.button<StyledProps>`
	width: 100%;
	color: ${({ theme, color }) => (color === 'primary' ? theme.colors.bt_white : theme.colors.bt_grey[50])};
	background-color: ${({ theme, color }) =>
		color === 'primary' ? theme.colors.bt_primary[200] : theme.colors.bt_grey[20]};
	border: none;
	padding: 17px 0;
	text-align: center;
	border-radius: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: 16px;

	& + button {
		margin-top: 11px;
	}
`;

export const MyMenuLink = styled(Link)`
	width: 100%;
	color: ${({ theme }) => theme.colors.bt_white};
	background-color: ${({ theme }) => theme.colors.bt_primary[200]};
	border: none;
	padding: 17px 0;
	text-align: center;
	border-radius: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: 16px;

	& + button {
		margin-top: 11px;
	}
`;
