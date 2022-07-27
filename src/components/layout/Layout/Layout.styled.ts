import styled from '@emotion/styled';

export const LayoutContentWrapper = styled.div`
	min-height: calc(100vh - 85px);
`;

export const Container = styled.div`
	position: fixed;
	inset: 0;
	background: linear-gradient(180deg, #c3eaff 0%, #ffffff 100%);

	@media only screen and (max-width: 1023px) {
		background: ${({ theme }) => theme.colors.bt_white};
	}
`;

export const AppContainer = styled.div`
	position: relative;
	max-width: 475px;
	height: 100vh;
	margin-left: calc(55vw - 1px);
	background-color: ${({ theme }) => theme.colors.bt_white};

	@media only screen and (max-width: 1023px) {
		margin: 0 auto;
	}
`;
