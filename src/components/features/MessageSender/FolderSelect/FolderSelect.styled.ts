import styled from '@emotion/styled';
import ArrowIcon from '@/assets/images/messageSender/arrow.svg';

export const FolderSelectContainer = styled.div`
	position: relative;
	min-width: 136px;
`;

export const SelectedFolderWrapper = styled.div`
	position: absolute;
	width: 100%;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.bt_white};
	z-index: 300;

	& > input[type='checkbox'] {
		display: none;
	}

	& > label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 24px;
		padding: 0 10px 0 22px;
		border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
		border-radius: 12px;
		font-size: ${({ theme }) => theme.fontSize.f10};
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
		line-height: ${({ theme }) => theme.lineHeight.lh10};
		letter-spacing: -0.01em;
		color: ${({ theme }) => theme.colors.bt_primary[200]};
		cursor: pointer;
	}

	& > label > span {
		width: 14px;
		height: 14px;
		background: url(${ArrowIcon});
		transition: transform 0.1s;
		background-repeat: no-repeat;
		background-position: center;
	}

	& > input[type='checkbox']:checked {
		& + label > span {
			transform: rotate(180deg);
		}
	}
`;

export const FolderList = styled.ul`
	position: absolute;
	top: 12px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bt_primary[100]};
	border-radius: 0 0 12px 12px;
`;

export const FolderItem = styled.li`
	display: flex;

	& > input[type='radio'] {
		display: none;
	}

	& > label {
		width: 100%;
		padding: 8px 17px;
		margin: 0px 5px 4px 5px;
		font-size: ${({ theme }) => theme.fontSize.f10};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh10};
		color: ${({ theme }) => theme.colors.bt_primary[300]};
		letter-spacing: -0.01em;
		cursor: pointer;
	}

	&:first-of-type > label {
		margin-top: 18px;
	}

	& > input[type='radio']:checked {
		& + label {
			border-radius: 4px;
			background-color: ${({ theme }) => theme.colors.bt_white};
			color: ${({ theme }) => theme.colors.bt_primary[200]};
		}
	}
`;
