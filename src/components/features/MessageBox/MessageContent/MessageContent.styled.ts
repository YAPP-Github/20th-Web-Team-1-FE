import styled from '@emotion/styled';
import { CheckedProps } from '../MessageCheckBox/MessageCheckBox.type';

export const MessageWrapper = styled.div<CheckedProps>`
	background: ${({ checked }) => (checked ? ' #EEFBFA' : ' #fff')};
	height: 97px;
	width: 100%;
	padding: 28px 32px;
	display: flex;
	align-items: center;
	border-bottom: 0.4px solid #cecece;
`;

export const ProfileImage = styled.div`
	img {
		width: 47px;
		height: 47px;
	}
`;

export const Sender = styled.span`
	font-weight: 500;
	font-size: 14px;
	line-height: 14px;
`;

export const TimeText = styled.span`
	font-weight: 300;
	font-size: 10px;
	line-height: 10px;
`;

export const MessageText = styled.div`
	font-weight: 300;
	font-size: 13px;
	line-height: 13px;
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
	width: calc(100% - 47px);
`;

export const RightContainer = styled.div``;
export const LikeButton = styled(Button)``;
