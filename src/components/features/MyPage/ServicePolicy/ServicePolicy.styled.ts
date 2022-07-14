import styled from '@emotion/styled';

export const ServicePolicyWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32px;

	& > p {
		font-size: 10px;
		color: ${({ theme }) => theme.colors.bt_grey[40]};
		font-weight: ${({ theme }) => theme.fontWeight.thin};
	}

	& > div {
		display: flex;
		align-items: center;

		& > a {
			font-size: 10px;
			color: ${({ theme }) => theme.colors.bt_grey[40]};
			font-weight: ${({ theme }) => theme.fontWeight.normal};

			&:first-of-type {
				display: flex;
				align-items: center;

				&::after {
					content: '';
					display: inline-block;
					width: 0.1px;
					height: 11px;
					margin: 0 8px;
					background-color: ${({ theme }) => theme.colors.bt_grey[40]};
				}
			}
		}
	}
`;
