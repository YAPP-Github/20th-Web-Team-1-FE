import styled from '@emotion/styled';

const POPUP_IMAGE_SIZE = '66px';

const BOX_SHADOW_COLOR = 'rgba(79, 181, 255, 0.12)';

export const PopUpWrapper = styled.div`
	width: 80%;
	height: ${POPUP_IMAGE_SIZE};

	display: flex;
	justify-content: space-between;
`;

export const IconBox = styled.div`
	min-width: ${POPUP_IMAGE_SIZE};
	min-height: ${POPUP_IMAGE_SIZE};

	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 7.5px;

	background: ${({ theme }) => theme.colors.bt_white};

	border-radius: 20px;
	box-shadow: 0px 0px 10px ${BOX_SHADOW_COLOR};
`;

export const MessageBox = styled.div`
	width: 100%;
	height: ${POPUP_IMAGE_SIZE};

	padding: 15px 20px;
	margin-left: 14px;

	background: ${({ theme }) => theme.colors.bt_white};

	border-radius: 20px 20px 20px 0px;
	box-shadow: 0px 0px 10px ${BOX_SHADOW_COLOR};
`;

export const NameText = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	font-size: ${({ theme }) => theme.fontSize.f15};
	line-height: ${({ theme }) => theme.lineHeight.lh15};
	color: ${({ theme }) => theme.colors.bt_grey[120]};

	margin-bottom: 7px;
`;

export const AlertMessage = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: ${({ theme }) => theme.fontSize.f12};
	line-height: ${({ theme }) => theme.lineHeight.lh12};
	color: ${({ theme }) => theme.colors.bt_grey[85]};
`;
