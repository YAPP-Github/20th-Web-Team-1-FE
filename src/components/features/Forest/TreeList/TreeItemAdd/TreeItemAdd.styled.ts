import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ItemAddContainer = styled.li``;

export const ItemAddBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 221px;
	background-color: ${(props) => props.theme.colors.bt_white};
	border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
	border-radius: 20px;

	& > div {
		position: relative;
		width: 53px;
		height: 53px;
		background-color: ${(props) => props.theme.colors.bt_primary[50]};
		border-radius: 50%;

		& > span {
			position: absolute;
			top: 50%;
			left: calc(50% - 10px);
			width: 20px;
			background-color: #888888;
		}

		& > span:nth-of-type(1) {
			height: 2px;
		}

		& > span:nth-of-type(2) {
			height: 1.5px;
			transform: rotate(90deg);
		}
	}
`;
