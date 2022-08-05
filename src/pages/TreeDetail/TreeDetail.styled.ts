import styled from '@emotion/styled';

export const TemporaryWrapper = styled.div`
	width: 100%;
	height: calc(var(--vh, 1vh) * 100 - 85px);
	overflow: hidden;
	position: relative;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.colors.bt_primary[60]} 0%,
		${({ theme }) => theme.colors.bt_white} 100%
	);
`;

export const TreeDetailTextWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	top: 127px;
`;

export const TreeDetailMainText = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f20};
	line-height: ${({ theme }) => theme.lineHeight.lh20};
	text-align: center;
	margin-bottom: 10px;

	> span {
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		font-size: ${({ theme }) => theme.fontSize.f16};
		line-height: ${({ theme }) => theme.lineHeight.lh16};
		color: ${({ theme }) => theme.colors.bt_grey[55]};
		display: block;
		margin-top: 10px;
	}
`;

export const Button = styled.button`
	position: absolute;
	top: 127px;

	background: none;

	border: none;
`;

export const PrevButton = styled(Button)`
	left: 0;
	margin-left: 10px;
`;

export const NextButton = styled(Button)`
	right: 0;
	margin-right: 10px;
`;
