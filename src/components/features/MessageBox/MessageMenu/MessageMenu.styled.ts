import styled from '@emotion/styled';

export const MenuContainer = styled.div`
	padding: 94px 32px 42px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

export const InnerWrapper = styled.div`
	display: flex;
`;

export const Title = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 18px;
`;

export const Button = styled.button`
	border: none;
	background: none;
`;
export const HamburgerButton = styled(Button)`
	margin-right: 12px;
`;

export const MenuTitle = styled.span`
	font-weight: 600;
	font-size: 18px;
	line-height: 18px;
`;

export const MenuButton = styled(Button)`
	border: 0.5px solid #4b4b4b;
	border-radius: 5px;
	font-weight: 400;
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	letter-spacing: -0.02em;
	color: #4b4b4b;
	padding: 4px 9px;

	&:first-child {
		margin-right: 8px;
	}
`;
