import styled from '@emotion/styled';

export const TreeInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 326px;
	height: 415px;
	margin: auto;
	background-color: ${(props) => props.theme.colors.bt_white};
	border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
	border-radius: 20px;
	overflow: hidden;

	& > div {
		width: 326px;
		height: 287px;
	}

	& > .fruit-select-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 326px;
		height: 128px;
		background-color: ${(props) => props.theme.colors.bt_primary[20]};

		& > .fruit-list {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 14px 17px;
		}
	}
`;

export const WarnningDescBox = styled.div`
	margin-top: 34px;

	& > p {
		color: ${(props) => props.theme.colors.bt_grey[85]};
		text-align: center;
		font-size: ${(props) => props.theme.fontSize.f13};
		font-weight: ${(props) => props.theme.fontWeight.light};
		line-height: 21px;
		letter-spacing: -0.02em;
	}
`;
export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 14px;
	margin-top: 38px;
`;
