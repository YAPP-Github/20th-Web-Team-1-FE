import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type StyledProps = {
	selected: boolean;
};

export const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	padding: 8px 18px 20px 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.04);
	border-radius: 0px 0px 20px 20px;
	background-color: ${(props) => props.theme.colors.bt_white};

	& > nav {
		width: 100%;
	}
`;

export const HeaderLinkList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

	& > li {
		flex-shrink: 0;
		margin: 0 7%;
	}
`;

export const HeaderLink = styled(Link)<StyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > span {
		margin-top: 6px;
		font-size: 10px;
		color: ${({ selected, theme }) => (selected ? theme.colors.bt_green : theme.colors.bt_lightGray)};
		line-height: 8px;
	}
`;
