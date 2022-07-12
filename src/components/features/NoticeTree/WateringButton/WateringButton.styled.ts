import styled from '@emotion/styled';

export const WATERING_IMAGE_SIZE = '66px';
export const Wrapper = styled.div`
	position: absolute;
	bottom: 65px;
	right: 54px;
	text-align: center;
	span {
		margin-top: 7px;
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		font-size: ${({ theme }) => theme.fontSize.f12};
		line-height: ${({ theme }) => theme.lineHeight.lh12};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[100]};
	}
`;
export const ImageWrapper = styled.div`
	background: #fff;
	width: ${WATERING_IMAGE_SIZE};
	height: ${WATERING_IMAGE_SIZE};
	border-radius: 20px;
	img {
		width: ${WATERING_IMAGE_SIZE};
		height: ${WATERING_IMAGE_SIZE};
	}
`;
