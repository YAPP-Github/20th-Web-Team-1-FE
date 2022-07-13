import styled from '@emotion/styled';

export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
`;

export const ModalWrapper = styled.div`
	min-width: 350px;
	min-height: 496px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.bt_white};
`;

export const WateringImgWrapper = styled.div`
	text-align: center;
`;

export const WateringImg = styled.img`
	width: 120px;
	height: auto;
	margin: 72px 0 31px 0;
	border-radius: 50%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const MessageTitle = styled.h3`
	margin-bottom: 43px;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.f20};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	line-height: ${({ theme }) => theme.lineHeight.lh20};
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.bt_grey[120]};
`;

export const MessageDescWrapper = styled.span`
	margin-bottom: 83px;

	& > p {
		margin-bottom: 0.5em;

		text-align: center;
		font-size: ${({ theme }) => theme.fontSize.f16};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh16};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[85]};
	}

	& > p:nth-last-of-type(1) {
		margin-bottom: 83px;
	}
`;

export const ConfirmBtnWrapper = styled.div`
	padding: 0 32px;
`;
