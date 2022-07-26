import styled from '@emotion/styled';

export const SmallModalContainer = styled.div`
	width: 100%;
	height: 273px;
	padding: 41px 31px;

	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > p {
		text-align: center;
		line-height: 26px;
		white-space: pre-line;
	}
`;
