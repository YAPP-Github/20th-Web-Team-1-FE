import styled from '@emotion/styled';

export const LayoutContentWrapper = styled.div`
	min-height: calc(var(--vh, 1vh) * 100 - 85px);
`;

export const AppContainer = styled.div`
	position: relative;
	max-width: 475px;
	min-height: calc(var(--vh, 1vh) * 100);
	margin-left: calc(55vw);
	background-color: ${({ theme }) => theme.colors.bt_white};

	@media only screen and (max-width: 1200px) {
		margin: 0 auto;
	}
`;
