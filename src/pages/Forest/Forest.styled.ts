import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: relative;
	height: calc(100vh - 85px);

	overflow: hidden;
`;
export const TreesContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	overflow: auto;

	margin-top: 11vh;
	padding: 0px 32px 85px 32px;
`;

export const MessageChipContainer = styled.div`
	min-height: 55px;
	max-height: 84px;
	height: 10vh;
`;

export const TreeListBox = styled.div`
	width: 100%;
	flex-grow: 1;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-height: 122px;
	height: 13.27vh;
`;
