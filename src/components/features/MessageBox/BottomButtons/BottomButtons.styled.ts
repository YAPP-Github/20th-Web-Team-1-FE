import styled from '@emotion/styled';

export const BackButtonContainer = styled.div`
	width: 100%;

	position: absolute;
	bottom: 30px;

	display: flex;
	justify-content: center;

	padding: 0px 32px;
`;

export const Button = styled.button`
	height: 50px;

	font-size: ${({ theme }) => theme.fontSize.f16};
	line-height: ${({ theme }) => theme.lineHeight.lh16};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.bt_grey[50]};

	border: none;
	border-radius: 10px;

	background: ${({ theme }) => theme.colors.bt_grey[20]};
`;

export const LongButton = styled(Button)`
	width: 100%;

	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ShortButton = styled(Button)`
	width: 50%;

	font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ShortGreenButton = styled(ShortButton)`
	color: ${({ theme }) => theme.colors.bt_white};

	margin-left: 14px;

	background: ${({ theme }) => theme.colors.bt_primary[200]};
`;
