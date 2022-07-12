import styled from '@emotion/styled';

export const MessageBoxInner = styled.div`
	width: 100%;
	height: 100%;
	margin: auto 40px;
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

export const MessageBoxWrapper = styled.div`
	position: absolute;
	bottom: 129px;
	width: 100%;
	height: 173px;
	z-index: 1;
	display: flex;
	justify-content: center;
`;

export const CancleIcon = styled.p`
	position: absolute;
	top: 12px;
	right: 20px;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	font-size: 26.2727px;
	line-height: 28px;
	color: ${({ theme }) => theme.colors.bt_primary[200]};
	z-index: 1;
`;

export const MessageText = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	font-size: ${({ theme }) => theme.fontSize.f14};
	line-height: ${({ theme }) => theme.lineHeight.lh22};
	height: 80%;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const MessageWriter = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize.f12};
	line-height: ${({ theme }) => theme.lineHeight.lh12};
	color: ${({ theme }) => theme.colors.bt_grey[68]};
`;

export const MessageWriterWrapper = styled.div`
	height: 10%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const MessageWriterImage = styled.img`
	width: 17px;
	height: 17px;
	margin-right: 6px;
`;
