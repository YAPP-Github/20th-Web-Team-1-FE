import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { SideDrawerStyledPropType } from './type';

export const SideDrawerContainer = styled.div<SideDrawerStyledPropType>`
	position: fixed;
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	top: 0;
	left: 0;
	width: calc(100% - 72px);
	height: 100%;
	background-color: ${({ theme }) => theme.colors.bt_white};
	overflow-y: auto;
	z-index: 200;
	transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	transform: ${({ show }) => (show ? 'translateX(0px)' : 'translateX(-100%)')};
`;

export const Divider = styled.span`
	width: 100%;
	height: 0.5px;
	margin: 28px 0;
	background-color: ${({ theme }) => theme.colors.bt_grey[30]};
`;

export const ThumbnailWrapper = styled.section``;

export const ThumbnailBox = styled.div`
	display: flex;
	align-items: center;
	padding-left: 32px;

	& > .thumbnail-img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.bt_white};
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
	}

	& > .thumbnail-info {
		margin-left: 12px;
		& > h2 {
			font-size: ${({ theme }) => theme.fontSize.f17};
			font-weight: ${({ theme }) => theme.fontWeight.semiBold};
			line-height: ${({ theme }) => theme.lineHeight.lh20};
			letter-spacing: -0.02em;
			color: ${({ theme }) => theme.colors.bt_grey[120]};
		}

		& > span {
			font-size: ${({ theme }) => theme.fontSize.f13};
			font-weight: ${({ theme }) => theme.fontWeight.normal};
			line-height: ${({ theme }) => theme.lineHeight.lh13};
			letter-spacing: -0.02em;
			color: ${({ theme }) => theme.colors.bt_grey[100]};
		}
	}
`;

export const MessageFilterListWrapper = styled.section`
	margin-top: 50px;
`;

export const MessageFilterList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 23px;
	padding-left: 32px;

	& > li {
		font-size: ${({ theme }) => theme.fontSize.f15};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh15};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[120]};
	}
`;

export const TreeFolderListWrapper = styled.section`
	margin: 0 32px;
`;

export const TreeFolderListTopMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > h3 {
		font-size: ${({ theme }) => theme.fontSize.f15};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh15};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[120]};
	}

	& > button {
		border: 0.5px solid ${({ theme }) => theme.colors.bt_grey[50]};
		border-radius: 5px;
		background-color: ${({ theme }) => theme.colors.bt_white};
		font-size: ${({ theme }) => theme.fontSize.f12};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh12};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[50]};
	}
`;

export const TreeFolderList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 16px;
`;

export const TreeFolderItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 11px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.bt_primary[20]};
	font-size: ${({ theme }) => theme.fontSize.f14};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	line-height: ${({ theme }) => theme.lineHeight.lh14};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};

	& > .folder-info {
		display: flex;
		align-items: center;
		height: 30px;

		& > .folder-badge {
			position: relative;
			width: 18px;
			height: 18px;
			margin-right: 7px;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.colors.bt_white};

			& > .badge-overlap {
				position: absolute;
				top: -5px;
				right: 0px;
			}
		}
	}

	& > .folder-edit-buttons {
		& > button {
			display: flex;
			align-items: center;
			border: 0;
			background-color: transparent;
			line-height: 100%;
		}
	}
`;

export const TreeFolderItemAdd = styled(Link)`
	position: relative;
	height: 30px;
	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 5px;

	& > .shape {
		position: absolute;
		top: calc(50% - 0.5px);
		left: calc(50% - 6px);
		width: 12px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.bt_primary[200]};
	}

	& > .shape.column {
		transform: rotate(90deg);
	}
`;
