import styled from '@emotion/styled';

export const MyInfoContainer = styled.section`
	width: 100%;
	padding: 52px 32px 40px 32px;
	background-color: ${({ theme }) => theme.colors.bt_primary[20]};
	margin-top: -20px;
`;

export const MyProfile = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 18px;
`;

export const MyProfileImageWrapper = styled.div`
	width: 60px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.bt_white};
	border-radius: 50%;
	margin-right: 12px;

	& > img {
		width: 60px;
		height: 60px;
	}
`;

export const MyNameWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 6px;
	width: 100%;

	& > p {
		display: inline-block;
		font-size: 20px;
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
		margin-right: 18px;
	}

	& > button {
		background-color: transparent;
		width: 17px;
		height: 17px;
		border: none;
		padding: 0;
	}
`;

export const MyEmailWrapper = styled.p`
	font-size: 13px;
`;

export const MyUrlAddress = styled.div`
	& > h3 {
		font-size: 15px;
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
		margin-bottom: 12px;
	}
`;

export const MyUrlCopyWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.colors.bt_white};
	padding: 14px;

	& > p {
		font-size: 12px;
		font-weight: ${({ theme }) => theme.fontWeight.light};
	}

	& > button {
		border: none;
		background-color: transparent;
		width: 14px;
		height: 14px;
		box-sizing: content-box;
		padding: 4px;
	}
`;
