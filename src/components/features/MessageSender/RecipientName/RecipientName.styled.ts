import styled from '@emotion/styled';

export const RecipientNameContainer = styled.h3`
	line-height: ${({ theme }) => theme.lineHeight.lh20};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f20};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;
