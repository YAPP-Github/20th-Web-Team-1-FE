import styled from '@emotion/styled';

export const MessageDetailHeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 13px;
`;

export const MessageSenderInfo = styled.div`
	display: flex;
	align-items: center;

	& > img {
		width: 30px;
		height: 30px;
		margin-right: 6px;
	}

	& > h2 {
		font-weight: ${({ theme }) => theme.fontWeight.medium};
	}
`;

export const MessageAdditionalMenu = styled.div`
	display: flex;
	align-items: center;
	line-height: 20px;

	& > img {
		margin-right: 10px;
	}

	& > a {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		font-size: 30px;
		color: ${({ theme }) => theme.colors.bt_primary[200]};
		width: 17px;
		height: 17px;
	}
`;