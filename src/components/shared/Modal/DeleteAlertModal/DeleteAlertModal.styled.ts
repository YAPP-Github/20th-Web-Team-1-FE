import styled from '@emotion/styled';

export const TopImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
`;

export const TopImage = styled.img`
	width: 120px;
	height: 120px;
	margin: 72px 0 17px 0;
	border-radius: 50%; /* 이미지 위치 확인 용 */
	background-color: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const MessageTitle = styled.h3`
	margin-bottom: 24px;
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: ${({ theme }) => theme.lineHeight.lh20};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
	text-align: center;
`;

export const MessageDescWrapper = styled.span`
	text-align: center;

	& > p {
		font-size: ${({ theme }) => theme.fontSize.f15};
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		line-height: ${({ theme }) => theme.lineHeight.lh22};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[85]};
	}

	& > p > strong {
		color: ${({ theme }) => theme.colors.bt_grey[120]};
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	margin: 64px 30px 0 30px;
	gap: 0 18px;
`;
