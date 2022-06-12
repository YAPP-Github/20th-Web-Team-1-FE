import styled from '@emotion/styled';
import { ItemWrapper } from '@/components/features/Trees/TreeList/TreeItem/TreeItem.styled';

export const ItemAddWrapper = styled(ItemWrapper)`
	cursor: pointer;

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
