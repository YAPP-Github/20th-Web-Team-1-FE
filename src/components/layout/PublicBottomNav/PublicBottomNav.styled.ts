import styled from '@emotion/styled';

export const BottomNavWrapper = styled.nav`
	position: sticky;
	bottom: 0;
	width: 100%;
	padding: 21px 60px 32px 60px;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.05);
	border-radius: 20px 20px 0px 0px;
`;
