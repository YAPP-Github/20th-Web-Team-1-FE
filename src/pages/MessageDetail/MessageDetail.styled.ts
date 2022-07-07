import styled from '@emotion/styled';

export const MessageDetailContainer = styled.main`
	padding: 72px 32px;
`;

export const MessageContentWrapper = styled.p`
	resize: none;
	width: 100%;
	height: 435px;
	padding: 30px;
	background: ${({ theme }) => theme.colors.bt_primary[20]};
	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 20px;
	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: 14px;
`;

export const MessageNavButtonWrapper = styled.div`
	margin-top: 46px;
	width: 100%;
	display: flex;
	gap: 14px;

	& > a {
		width: 50%;
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
