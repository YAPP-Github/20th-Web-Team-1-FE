import styled from '@emotion/styled';

export const TreesContainer = styled.main`
	padding: 96px 0 30px 0;
	margin: 0 32px;
`;

export const TreeListBox = styled.div`
	margin-top: 34px;
`;

export const EmptyTreeListBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 42px;
`;

export const EmptyTreeListMessageImg = styled.img`
	width: 150px;
	height: auto;
	margin-bottom: 12px;
`;

export const EmptyTreeListMessage = styled.p`
	font-size: ${({ theme }) => theme.fontSize.f14};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: ${({ theme }) => theme.lineHeight.lh20};
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 42px;
`;
