import styled from '@emotion/styled';

export const MyContentsContainer = styled.section`
	background: ${({ theme }) => theme.colors.bt_white};
	padding: 27px 32px 60px 32px;
	border-radius: 20px 20px 0px 0px;
	margin-top: -20px;
`;

export const MyBadgeContainer = styled.div`
	margin-bottom: 12px;

	& > h3 {
		font-size: 15px;
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	}
`;

export const MyBadgeList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px;
	padding: 18px 25px;
`;

export const MySettingContainer = styled.div`
	& > h3 {
		font-size: 15px;
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
		margin-bottom: 24px;
	}
`;

export const LogoutButton = styled.button`
	width: 100%;
	color: ${({ theme }) => theme.colors.bt_white};
	background-color: ${({ theme }) => theme.colors.bt_green};
	border: none;
	padding: 17px 0;
	text-align: center;
	border-radius: 10px;
	margin-top: 49px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
