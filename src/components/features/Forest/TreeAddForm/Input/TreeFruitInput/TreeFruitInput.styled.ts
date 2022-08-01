import styled from '@emotion/styled';
import { StyledProps } from './TreeFruitInput.type';

export const FruitInputContainer = styled.div`
	input[name='fruit-radio'] {
		display: none;
	}
`;

export const FruitInputLabel = styled.label<StyledProps>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 32px;
	padding: 5px 11px;
	border-radius: 18px;
	border: 1px solid ${(props) => (props.selected ? props.theme.colors.bt_primary[200] : 'transparent')};
	background-color: ${(props) => props.theme.colors.bt_white};
	cursor: pointer;

	& > span:nth-of-type(1) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		height: 100%;
	}

	& > span:nth-of-type(2) {
		line-height: 100%;
		font-size: ${(props) => props.theme.fontSize.f12};
		font-weight: ${(props) => props.theme.fontWeight.light};
		font-family: 'Pretendard', 'noto sans';
		letter-spacing: -0.02em;
	}

	img {
		width: 14px;
		height: 16px;
	}
`;
