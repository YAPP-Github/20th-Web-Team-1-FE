import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 154px;
	height: 221px;
	background-color: ${(props) => props.theme.colors.bt_white};
	border: 0.5px solid ${(props) => props.theme.colors.bt_green};
	border-radius: 20px;
`;

export const TreeItemPreview = styled.div`
	width: 154px;
	height: 181px;
`;

export const TreeItemName = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 154px;
	height: 40px;
	border-top: 0.5px solid ${(props) => props.theme.colors.bt_green};
	font-size: ${(props) => props.theme.fontSize.f12};
	line-height: ${(props) => props.theme.lineHeight.lh12};
`;
