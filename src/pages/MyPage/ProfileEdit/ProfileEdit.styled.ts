import styled from '@emotion/styled';
export const ProfileEditForm = styled.form`
	width: 100%;
	min-height: calc(100vh - 85px);
	padding: 154px 32px 30px 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const ProfileEditWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;

	& > label {
		font-size: 20px;
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		margin-bottom: 101px;
	}

	& > img {
		width: 120px;
		height: 120px;
		background: ${({ theme }) => theme.colors.bt_white};
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
		border-radius: 60px;
	}

	& > input {
		width: 150px;
		padding: 8px 0;
		text-align: center;
		border: none;
		border-bottom: 2px solid ${({ theme }) => theme.colors.bt_primary[200]};
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		font-size: 20px;
		margin-top: 18px;
	}
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	gap: 14px;

	& > a {
		width: 50%;
		padding: 17px 0;
		text-align: center;
		background-color: ${({ theme }) => theme.colors.bt_grey[20]};
		color: ${({ theme }) => theme.colors.bt_grey[50]};
		border-radius: 10px;
		font-size: 16px;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		line-height: 19.5px;
	}

	& > button {
		width: 50%;
		padding: 17px 0;
		text-align: center;
		background-color: ${({ theme }) => theme.colors.bt_primary[200]};
		color: ${({ theme }) => theme.colors.bt_white};
		border-radius: 10px;
		border: none;
		font-size: 16px;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;
