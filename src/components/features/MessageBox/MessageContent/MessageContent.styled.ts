import styled from '@emotion/styled';
import { MessageWrapperProps } from '../MessageCheckBox/MessageCheckBox.type';

const PROFILE_IMAGE_SIZE = 47;

export const MessageWrapper = styled.div<MessageWrapperProps>`
	height: 97px;
	width: 100%;

	display: flex;
	align-items: center;

	padding: 0px 32px;

	background: ${({ theme, checked }) => (checked ? ' #EEFBFA' : theme.colors.bt_white)};

	border-radius: ${({ idx }) => idx === 0 && '20px 20px 0px 0px'};
	border-bottom: 0.4px solid #cecece;

	cursor: pointer;
`;

export const MessageContainer = styled.div`
	width: 100%;

	display: flex;
`;

export const ProfileImage = styled.div`
	margin-right: 10px;
	img {
		width: ${PROFILE_IMAGE_SIZE}px;
		height: ${PROFILE_IMAGE_SIZE}px;
	}
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
	word-break: break-all;
	white-space: normal;

	display: -webkit-box;
	-webkit-line-clamp: 2; /* 텍스트를 자를 때 원하는 단위 ex) 3줄 */
	-webkit-box-orient: vertical;
	overflow: hidden;
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
	flex-grow: 1;
`;

export const FavoriteContainer = styled.div`
	margin-left: 18px;
`;
