import styled from '@emotion/styled';

export const CheckBoxContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CheckBoxLabel = styled.label`
	margin-left: 2px;
	font-size: ${({ theme }) => theme.fontSize.f14};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: ${({ theme }) => theme.lineHeight.lh14};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const CheckBoxInput = styled.input``;
