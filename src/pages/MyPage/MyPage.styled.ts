import styled from '@emotion/styled';

export const MyPageContainer = styled.main`
	min-height: calc(100vh - 85px);
	background-color: ${({ theme }) => theme.colors.bt_primary[20]};
	padding-bottom: 50px;
	margin-bottom: -20px;
`;
