import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type StyledProps = {
	selected: boolean;
};

export const BottomNavWrapper = styled.nav`
	position: sticky;
	bottom: 0;
	width: 100%;
	padding: 21px 60px 32px 60px;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.05);
	border-radius: 20px 20px 0px 0px;
`;

export const BottomNavLinkList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

	& > li {
		flex-shrink: 0;
		margin: 0 7%;
	}
`;

export const BottomNavLink = styled(Link)<StyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > span {
		margin-top: 6px;
		font-size: 10px;
		color: ${({ selected, theme }) => (selected ? theme.colors.bt_primary[200] : theme.colors.bt_grey[20])};
		line-height: 8px;
	}
`;
