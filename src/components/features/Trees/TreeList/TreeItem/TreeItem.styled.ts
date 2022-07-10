import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 221px;

	& > a {
		width: 100%;
		background-color: ${(props) => props.theme.colors.bt_white};
		border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
		border-radius: 20px;
	}

	& > a > div {
		height: 181px;
	}

	& > a > span {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		border-top: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
		font-size: ${(props) => props.theme.fontSize.f12};
		line-height: ${(props) => props.theme.lineHeight.lh12};
		color: ${(props) => props.theme.colors.bt_grey[120]};
	}
`;
