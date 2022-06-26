import styled from '@emotion/styled';

export const MessageTopMenuContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 44px;
`;

export const MessageLeftMenu = styled.div`
	display: flex;
	align-items: flex-start;

	& > button {
		background-color: transparent;
		border: none;
		padding: 0;
		width: 19px;
		height: 19px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 12px;
	}

	& > h1 {
		display: inline-block;
		font-size: 18px;
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	}
`;
