import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	display: flex;
	flex-direction: column;
	padding: 90px 32px;
`;

export const Content = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	span {
		font-weight: 200;
		font-size: 16px;
		line-height: 26px;
		color: #121212;
	}
	img {
		width: 268px;
		height: 268px;
	}
`;
