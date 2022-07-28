import styled from '@emotion/styled';
import { DefaultButton } from '@/components/shared/DefaultButton/DefaultButton.styled';

export const MessageBoxWrapper = styled.div`
	position: absolute;
	bottom: 45px;
	width: 100%;
	min-height: 173px;
	max-height: 350px;
	z-index: 1;
	display: flex;
	justify-content: center;

	padding: 0px 40px;
`;

export const MessageBoxInner = styled.div`
	width: 100%;
	height: 100%;
	min-height: 173px;
	padding: 24px 27px;
	background: ${({ theme }) => theme.colors.bt_white};
	box-sizing: border-box;
	border-radius: 20px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CancelButton = styled(DefaultButton)`
	width: 20px;
	height: 33px;

	position: absolute;
	top: 12px;
	right: 20px;

	z-index: 1;
`;

export const MessageTitle = styled.span`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize.f16};
	line-height: ${({ theme }) => theme.lineHeight.lh18};
	color: ${({ theme }) => theme.colors.bt_grey[55]};
	letter-spacing: -0.02em;
	margin-bottom: 9px;
`;

export const MessageText = styled.p`
	flex-grow: 1;
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	font-size: ${({ theme }) => theme.fontSize.f14};
	line-height: ${({ theme }) => theme.lineHeight.lh22};
	color: ${({ theme }) => theme.colors.bt_grey[40]};
	overflow-y: auto;
	overflow-x: hidden;
	/* ::-webkit-scrollbar {
		display: none;
	} */
`;

export const MessageWriter = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize.f12};
	line-height: ${({ theme }) => theme.lineHeight.lh12};
	color: ${({ theme }) => theme.colors.bt_grey[55]};
	word-break: break-all;
`;

export const MessageWriterWrapper = styled.div`
	padding-top: 5px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const MessageWriterImage = styled.img`
	width: 17px;
	height: 17px;
	margin-right: 6px;
`;
