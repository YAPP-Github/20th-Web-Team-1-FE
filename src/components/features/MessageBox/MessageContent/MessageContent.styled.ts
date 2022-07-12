import styled from '@emotion/styled';
import { CheckedProps } from '../MessageCheckBox/MessageCheckBox.type';

const PROFILE_IMAGE_SIZE = 47;

export const MessageWrapper = styled.div<CheckedProps>`
	height: 97px;
	width: 100%;

	display: flex;
	align-items: center;

	padding: 28px 32px;

	background: ${({ theme, checked }) => (checked ? ' #EEFBFA' : theme.colors.bt_white)};

	border-bottom: 0.4px solid #cecece;
`;

export const ProfileImage = styled.div`
	img {
		width: ${PROFILE_IMAGE_SIZE}px;
		height: ${PROFILE_IMAGE_SIZE}px;
`;

export const Sender = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize.f14};
	line-height: ${({ theme }) => theme.lineHeight.lh14};

	margin-bottom: 8px;
`;

export const TimeText = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: ${({ theme }) => theme.fontSize.f10};
	line-height: ${({ theme }) => theme.lineHeight.lh10};
`;

export const MessageText = styled.div`
	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: ${({ theme }) => theme.fontSize.f13};
	line-height: ${({ theme }) => theme.lineHeight.lh13};
`;

export const Button = styled.button`
	border: none;
	background: none;
`;

export const InnerBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ContentContainer = styled.div`
	width: calc(100% - ${PROFILE_IMAGE_SIZE}px);
`;
