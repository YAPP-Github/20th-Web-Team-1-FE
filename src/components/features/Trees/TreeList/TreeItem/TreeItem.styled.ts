import styled from '@emotion/styled';
import { TreeItemStyledType } from './type';

export const ItemWrapper = styled.li<TreeItemStyledType>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${(props) => (props.size === 'small' ? '154px' : '')};
	height: ${(props) => (props.size === 'small' ? '221px' : '')};
	background-color: ${(props) => props.theme.colors.bt_white};
	border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
	border-radius: 20px;

	& > div {
		width: ${(props) => (props.size === 'small' ? '154px' : '')};
		height: ${(props) => (props.size === 'small' ? ' 181px' : '')};
	}

	& > .item-name {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 154px;
		height: 40px;
		border-top: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
		font-size: ${(props) => props.theme.fontSize.f12};
		line-height: ${(props) => props.theme.lineHeight.lh12};
	}
`;
