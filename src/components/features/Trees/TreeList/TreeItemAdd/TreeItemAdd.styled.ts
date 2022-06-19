import styled from '@emotion/styled';

export const ItemAddWrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 154px;
	height: 221px;
	background-color: ${(props) => props.theme.colors.bt_white};
	border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
	border-radius: 20px;

	& > .plus-shape-container {
		position: relative;
		width: 53px;
		height: 53px;
		background-color: ${(props) => props.theme.colors.bt_primary[50]};
		border-radius: 50%;

		.plus-shape-bar {
			position: absolute;
			top: 50%;
			left: calc(50% - 10px);
			width: 20px;
			background-color: #888888;
		}

		.plus-shape-bar.row {
			height: 2px;
		}

		.plus-shape-bar.column {
			height: 1.5px;
			transform: rotate(90deg);
		}
	}
`;
