import styled from '@emotion/styled';

export const MyBadgeItem = styled.li`
	& > button {
		background-color: transparent;
		border: none;
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
		border-radius: 20px;
		padding: 0;
		width: 71px;
		height: 71px;

		& > img {
			width: 62px;
			height: 62px;
			border-radius: 20px;
		}

		@media screen and (min-width: 458px) {
			width: 77px;
			height: 77px;
		}
	}

	& > p {
		font-size: 12px;
		text-align: center;
		margin-top: 6px;
	}
`;
