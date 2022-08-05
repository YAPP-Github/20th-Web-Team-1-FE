import styled from '@emotion/styled';

export const MyPageContainer = styled.main`
	min-height: calc(var(--vh, 1vh) * 100 - 65px);
	background-color: ${({ theme }) => theme.colors.bt_primary[20]};
	margin-bottom: -20px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
