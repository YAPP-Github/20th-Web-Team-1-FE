import styled from '@emotion/styled';

export const MyInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 154px 0px 69px 0px;

	& > img {
		width: 117px;
		height: 117px;
		background-color: ${({ theme }) => theme.colors.bt_white};
		border-radius: 50%;
		margin-bottom: 23px;
	}

	& > p {
		&:nth-of-type(1) {
			font-size: 24px;
			font-weight: ${({ theme }) => theme.fontWeight.semiBold};
			margin-bottom: 15px;
		}

		&:nth-of-type(2) {
			font-size: 16px;
			font-weight: ${({ theme }) => theme.fontWeight.light};
		}
	}
`;
