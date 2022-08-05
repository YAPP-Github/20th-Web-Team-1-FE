import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: relative;
	height: calc(100vh - 85px);
	overflow: hidden;
`;

export const TreesContainer = styled.div`
	width: 100%;
	height: calc(100vh - 85px);
	display: flex;
	flex-direction: column;
	overflow: auto;
	margin-top: clamp(65px, 11vh, 94px);
	padding: 0px 32px 85px 32px;
`;

export const MessageChipContainer = styled.div`
	min-height: 55px;
	max-height: 84px;
	height: 10vh;
	margin-bottom: 5px;
`;

export const TreeListBox = styled.div`
	flex-grow: 1;
	width: 100%;
	margin-bottom: 5px;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-height: 122px;
	height: 13.27vh;
`;
