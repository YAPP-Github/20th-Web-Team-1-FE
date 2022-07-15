import styled from '@emotion/styled';

export const Wrapper = styled.main`
	height: calc(100vh - 85px);
	background: #fff;
	position: relative;
	overflow: hidden;
`;

export const MessageDetailContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0px 32px;
`;
export const MessageContentWrapper = styled.p`
	resize: none;
	width: 100%;
	max-height: 435px;
	height: 60%;
	padding: 30px;
	background: ${({ theme }) => theme.colors.bt_primary[20]};
	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 20px;
	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: 14px;
`;

export const MessageNavButtonWrapper = styled.div`
	width: calc(100% - 64px);

	position: absolute;
	bottom: 30px;

	display: flex;
	justify-content: space-around;

	& > a {
		width: calc(50% - 7px);
		padding: 17px 0;
		text-align: center;
		background-color: ${({ theme }) => theme.colors.bt_primary[200]};
		color: ${({ theme }) => theme.colors.bt_white};
		border-radius: 10px;
		font-size: 16px;
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		line-height: 16px;
	}
`;

export const ArrowIcon = styled.img`
	margin-right: 8px;
`;
export const ArrowDownIcon = styled.img`
	margin-left: 8px;
`;
