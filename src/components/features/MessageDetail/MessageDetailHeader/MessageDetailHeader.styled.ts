import { DefaultButton } from '@/components/shared/DefaultButton/DefaultButton.styled';
import styled from '@emotion/styled';

export const MessageDetailHeaderWrapper = styled.header`
	height: 30px;
	display: flex;
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

export const MessageMenu = styled.div`
	height: 100%;

	display: flex;
	align-items: center;
	line-height: 20px;

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

export const LikeButton = styled(DefaultButton)`
	height: 100%;

	display: flex;
	align-items: center;

	margin-right: 10px;
	padding: 0px;
`;
