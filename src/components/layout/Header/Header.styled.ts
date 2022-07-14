import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
	position: absolute;
	z-index: 1;
	top: 0;
	width: 100%;
	padding: 8px 18px 20px 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;

	& > a:first-of-type {
		height: 21px;
	}
`;
