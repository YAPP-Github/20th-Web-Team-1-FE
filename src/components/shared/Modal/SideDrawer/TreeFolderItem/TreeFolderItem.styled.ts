import styled from '@emotion/styled';

export const TreeFolderItem = styled.li`
	position: relative;
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
`;

export const TreeFolderItemThumbnailWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 30px;

	& > div {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		margin-right: 7px;
		border-radius: 50%;
	}
	img {
		width: 18px;
		height: 18px;
	}
`;

export const TreeFolderItemMoreMenuWrapper = styled.div`
	display: flex;
	height: 30px;
	transform: translate3d(0, -3px, 0);
	& > button {
		border: 0;
		background-color: transparent;
		line-height: 100%;
	}
`;
