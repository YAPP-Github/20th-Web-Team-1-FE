import styled from '@emotion/styled';
import { ChipStyledType } from './type';

export const FruitInputContainer = styled.div<ChipStyledType>`
	input[name='fruit-radio'] {
		display: none;
	}

	label {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 86px;
		height: 32px;
		padding: 5px 11px;
		border-radius: 18px;
		border: 1px solid ${(props) => (props.selected ? props.theme.colors.bt_primary[200] : 'transparent')};
		background-color: ${(props) => props.theme.colors.bt_white};
		cursor: pointer;
	}

	.fruit-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		height: 100%;
	}

	.fruit-name {
		line-height: 100%;
		font-size: ${(props) => props.theme.fontSize.f12};
		font-weight: ${(props) => props.theme.fontWeight.light};
		letter-spacing: -0.02em;
	}
`;
