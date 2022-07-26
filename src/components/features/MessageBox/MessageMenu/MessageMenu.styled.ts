import styled from '@emotion/styled';

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	padding: 94px 32px 41px;
`;

export const InnerWrapper = styled.div`
	display: flex;
`;

export const Title = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f18};
	line-height: ${({ theme }) => theme.lineHeight.lh18};
`;

export const Button = styled.button`
	border: none;
	background: none;
`;

export const HamburgerButton = styled(Button)`
	margin-right: 12px;
`;

export const MenuButton = styled(Button)`
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	font-size: ${({ theme }) => theme.fontSize.f12};
	line-height: ${({ theme }) => theme.lineHeight.lh12};
	text-align: center;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[85]};

	padding: 4px 9px;

	border: 0.5px solid ${({ theme }) => theme.colors.bt_grey[85]};
	border-radius: 5px;

	&:first-of-type {
		margin-right: 8px;
	}
`;
