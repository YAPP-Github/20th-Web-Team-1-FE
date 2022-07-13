import styled from '@emotion/styled';

export const MenuContainer = styled.div`
	padding: 94px 32px 27px;
`;

export const FlexBox = styled.div`
	display: flex;
`;

export const InfoContainer = styled(FlexBox)`
	justify-content: space-between;
	align-items: center;

	margin-top: 29px;
`;

export const CheckText = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: ${({ theme }) => theme.fontSize.f13};
	line-height: ${({ theme }) => theme.lineHeight.lh13};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};

	margin-left: 4px;
`;

export const StrongText = styled(CheckText)`
	font-weight: ${({ theme }) => theme.fontWeight.strongBold};
`;
