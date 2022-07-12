import styled from '@emotion/styled';
import { CheckedProps } from './MessageCheckBox.type';

export const CheckBoxContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CheckBoxLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSize.f14};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: ${({ theme }) => theme.lineHeight.lh14};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};

	cursor: pointer;
`;

export const HiddenCheckBoxInput = styled.input`
	width: 1px;
	height: 1px;

	position: absolute;

	white-space: nowrap;

	margin: -1px;
	padding: 0;

	border: 0;

	clip: rect(0, 0, 0, 0);
	clip-path: inset(50%);

	overflow: hidden;
`;

export const CheckBoxInput = styled.div<CheckedProps>`
	width: 16px;
	height: 16px;

	margin-right: 6px;

	background-color: ${({ checked, theme }) => (checked ? theme.colors.bt_primary[200] : 'transparent')};

	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 2px;

	cursor: pointer;
`;
