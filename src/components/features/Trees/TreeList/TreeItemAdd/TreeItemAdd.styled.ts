import styled from '@emotion/styled';
import { ItemWrapper } from '../TreeItem/TreeItem.styled';

export const ItemAddWrapper = styled(ItemWrapper)`
	cursor: pointer;
`;

export const AddCircle = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 53px;
	height: 53px;
	background-color: ${(props) => props.theme.colors.bt_lightGreen};
	border-radius: 50%;
	font-size: 30px;
`;
