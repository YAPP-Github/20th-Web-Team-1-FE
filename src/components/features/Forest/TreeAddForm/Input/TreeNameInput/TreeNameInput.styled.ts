import styled from '@emotion/styled';

export const TreeNameInput = styled.input`
	padding: 8px 0px;
	outline: 0;
	border: none;
	border-bottom: 1px solid ${(props) => props.theme.colors.bt_primary[200]};
	text-align: center;
	font-weight: ${(props) => props.theme.fontWeight.medium};
	font-size: ${(props) => props.theme.fontSize.f12};
	line-height: ${(props) => props.theme.lineHeight.lh12};
	letter-spacing: -0.02em;

	&:focus {
		color: ${(props) => props.theme.colors.bt_grey[120]};
	}
`;
