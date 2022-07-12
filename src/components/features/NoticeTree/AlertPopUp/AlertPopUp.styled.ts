import styled from '@emotion/styled';
import { IconBoxProps, MessageBoxProps, OpenAlertProps } from './AlertPopUp.type';

const POPUP_IMAGE_SIZE = '66px';
export const PopUpWrapper = styled.div<IconBoxProps>`
	width: auto;
	height: ${POPUP_IMAGE_SIZE};
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 120px;
	left: ${({ showAlert }) => (showAlert ? 32 : -22)}px;
	z-index: 1;
	transition: left 0.5s;
`;
export const IconBox = styled.div<OpenAlertProps>`
	width: ${POPUP_IMAGE_SIZE};
	height: ${({ openedAlertButton }) => (openedAlertButton ? 136 : 66)}px;
	display: flex;
	flex-direction: column;
	padding-top: 7.5px;
	align-items: center;
	border-radius: 20px;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 10px rgba(79, 181, 255, 0.12);
	transition: all 0.3s;
`;
export const ForestWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 70px;
`;
export const ForestImage = styled.img<OpenAlertProps>`
	opacity: ${({ openedAlertButton }) => (openedAlertButton ? 1 : 0)};
	transition: all 0.3s;
`;

export const ForestText = styled.span`
	display: block;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize.f10};
	line-height: ${({ theme }) => theme.lineHeight.lh10};
	color: ${({ theme }) => theme.colors.bt_primary[150]};
	text-align: center;
	margin-top: 5px;
`;
export const MessageBox = styled.div<MessageBoxProps>`
	width: 190px;
	height: ${POPUP_IMAGE_SIZE};
	border-radius: 20px 20px 20px 0px;
	background: ${({ theme }) => theme.colors.bt_white};
	box-shadow: 0px 0px 10px rgba(79, 181, 255, 0.12);
	padding: 15px 20px;
	margin-left: 14px;
	opacity: ${({ showAlertMessage }) => (showAlertMessage ? 1 : 0)};
	transition: all 2s;
`;

export const NameText = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f14};
	line-height: ${({ theme }) => theme.lineHeight.lh14};
	color: ${({ theme }) => theme.colors.bt_grey[120]};
	margin-bottom: 7px;
`;

export const AlertMessage = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.strongBold};
	font-size: ${({ theme }) => theme.fontSize.f11};
	& > span {
		color: ${({ theme }) => theme.colors.bt_primary[200]};
	}
`;
