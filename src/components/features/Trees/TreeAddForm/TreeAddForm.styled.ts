import styled from '@emotion/styled';

export const HelperMessageBox = styled.div`
	width: 326px;
	height: 66px;
	margin: auto;
	margin-top: 32px;
	border: 1px solid ${(props) => props.theme.colors.bt_primary[200]};
`;

export const TreeInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 326px;
	height: 415px;
	margin: auto;
	margin-top: 27px;
	border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.bt_white};
	overflow: hidden;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 326px;
		height: 287px;

		& > .tree-name-input-conainter {
			display: flex;
			justify-content: center;
			margin-top: 25px;
		}
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

export const TreeShapeContainer = styled.div<{ size?: 'small' | 'medium' }>`
	position: relative;
	bottom: 0;
	width: 100%;
	height: 205.73px;

	& > .tree-shape-top {
		position: absolute;
		width: ${(props) => (props.size === 'small' ? '68px' : '102px')};
		height: ${(props) => (props.size === 'small' ? '68px' : '102px')};
		top: ${(props) => (props.size === 'small' ? '40px' : '10px')};
		left: ${(props) => (props.size === 'small' ? 'calc(50% - 34px)' : 'calc(50% - 51px)')};
		border-radius: 50%;
		background: linear-gradient(to bottom right, #a6ffb2 0%, #40e1bf 100%);
		z-index: 2;
	}

	& > .tree-shape-bottom {
		position: absolute;
		width: ${(props) => (props.size === 'small' ? '10px' : '16px')};
		height: ${(props) => (props.size === 'small' ? '92px' : '138px')};
		bottom: 0;
		left: ${(props) => (props.size === 'small' ? 'calc(50% - 5px)' : 'calc(50% - 8px)')};
		background: linear-gradient(to bottom, #ffd3a8 0%, #e9906c 100%);
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
