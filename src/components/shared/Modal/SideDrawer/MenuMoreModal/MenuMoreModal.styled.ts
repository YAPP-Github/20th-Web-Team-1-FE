import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.bt_primary[150]};
	z-index: 1500;

	& > ul {
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 22px 12px;
	}

	& > ul > li > button {
		display: flex;
		align-items: center;
		gap: 6px;
		background-color: transparent;
		border: 0;
		line-height: ${({ theme }) => theme.lineHeight.lh13};
	}
`;
