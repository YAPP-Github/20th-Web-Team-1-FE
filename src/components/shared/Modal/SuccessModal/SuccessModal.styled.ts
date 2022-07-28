import styled from '@emotion/styled';
import { ModalContainer, ModalWrapper } from '../ModalFrame.styled';

export const SuccessModalContainer = ModalContainer;

export const SuccessModalWrapper = ModalWrapper;

export const WateringImgWrapper = styled.div`
	text-align: center;
`;

export const WateringImg = styled.img`
	width: 120px;
	height: 120px;
	margin: 72px 0 31px 0;
	border-radius: 50%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	object-fit: contain;
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
