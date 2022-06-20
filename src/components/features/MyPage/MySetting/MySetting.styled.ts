import styled from '@emotion/styled';

type StyledProps = {
	selected: boolean;
};

export const MySettingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& + div {
		margin-top: 17px;
	}
`;

export const SettingDescription = styled.div`
	margin-right: 4px;
	position: relative;

	& > p {
		font-size: 14px;
		margin-right: 7px;
		display: inline-block;
	}
`;

export const SettingDetails = styled.div`
	display: inline-block;
	position: relative;
	width: 14px;
	height: 14px;

	& > button {
		width: 14px;
		height: 14px;
		padding: 0;
		background-color: transparent;
		border: 0.4px solid #4b4b4b;
		border-radius: 2px;
		color: #4b4b4b;
		font-size: 12px;
		font-weight: 200;
	}
`;

export const SettingTooltip = styled.p`
	position: absolute;
	bottom: 5px;
	left: 6px;
	right: -190px;
	background-color: ${({ theme }) => theme.colors.bt_white};
	color: ${({ theme }) => theme.colors.bt_primary[200]};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	border-radius: 20px 20px 20px 0px;
	padding: 8px 18px;
	font-size: 11px;
`;

export const SettingButton = styled.button<StyledProps>`
	width: 40px;
	height: 15px;
	border: none;
	color: ${({ selected, theme }) => (selected ? theme.colors.bt_grey[100] : theme.colors.bt_white)};
	background-color: ${({ selected, theme }) => (selected ? theme.colors.bt_yellow[50] : theme.colors.bt_grey[30])};
	border-radius: 3.16832px;
	font-size: 10px;
	font-weight: 500;
	line-height: 10px;
	text-align: center;

	& + button {
		margin-left: 10px;
	}
`;
