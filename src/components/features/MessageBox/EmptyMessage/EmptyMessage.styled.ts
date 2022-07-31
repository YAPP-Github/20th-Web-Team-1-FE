import styled from '@emotion/styled';

export const Wrapper = styled.div`
	padding: 5vh 44px;

	display: flex;
	flex-direction: column;

	align-items: center;

	p {
		font-weight: 200;
		font-size: 15px;
		line-height: 28px;

		align-items: center;
		text-align: center;
	}
`;

export const ImageContainer = styled.div`
	width: 80vw;
	max-width: 302px;

	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
	}
`;
