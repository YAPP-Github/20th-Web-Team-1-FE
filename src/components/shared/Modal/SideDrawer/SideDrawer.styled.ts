import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { StyledProps } from './SideDrawer.type';

const slideIn = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(-100%, 0 ,0);
	}

	100% {
		opacity: 1;
		transform: translate3d(0, 0 ,0);
	}
`;

const slideOut = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(0, 0 ,0);
	}

	100% {
		opacity: 0;
		transform: translate3d(-100%, 0 ,0);
	}
`;

export const SideDrawerContainer = styled.div<StyledProps>`
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	width: calc(100% - 72px);
	max-width: 475px;
	height: 100vh;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.bt_white};
	animation: ${({ show }) => (show ? slideIn : slideOut)} 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
	z-index: 10;

	@media only screen and (min-width: 1200px) {
		inset: 0;
		margin-left: 55vw;
	}
`;

export const CloseBtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 30px 32px 0 32px;

	& > button {
		background-color: transparent;
		border: 0;
	}
`;

export const Divider = styled.span`
	width: 100%;
	height: 0.5px;
	margin: 28px 0;
	background-color: ${({ theme }) => theme.colors.bt_grey[30]};
`;

export const ThumbnailWrapper = styled.div`
	margin-top: 30px;
`;

export const ThumbnailBox = styled.div`
	display: flex;
	align-items: center;
	padding-left: 32px;

	& > div:nth-of-type(1) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.bt_white};
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
	}

	& > div:nth-of-type(2) {
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

	img {
		width: 60px;
		height: 60px;

		border-radius: 50%;
	}
`;

export const MessageFilterList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 23px;
	padding-left: 32px;
	margin-top: 50px;

	& > h3 {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		clip-path: polygon(0 0, 0 0, 0 0);
	}
`;

export const MessageFilterItem = styled.li`
	& > a {
		font-size: ${({ theme }) => theme.fontSize.f15};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh15};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[120]};
	}
`;

export const TreeFolderListWrapper = styled.div`
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
`;

export const TreeFolderList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 16px;
`;

export const TreeFolderItemAddContainer = styled.li``;

export const TreeFolderItemAddBtn = styled(Link)`
	position: relative;
	display: flex;
	min-width: 100%;
	min-height: 30px;
	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 5px;

	& > span {
		position: absolute;
		top: calc(50% - 0.5px);
		left: calc(50% - 6px);
		width: 12px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.bt_primary[200]};
	}

	& > span:nth-of-type(2) {
		transform: rotate(90deg);
	}
`;
