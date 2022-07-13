import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
`;
export const ModalInner = styled.div`
	min-width: 350px;
	min-height: 496px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.bt_white};

	position: relative;
`;

export const MoadlHead = styled.div`
	width: 100%;
	background: #00c4b8;
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px 20px 0px 0px;
`;

export const ModalTitle = styled.span`
	font-weight: 500;
	font-size: 18px;
	line-height: 18px;

	text-align: center;
	letter-spacing: -0.02em;

	color: #ffffff;
`;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: calc(100% - 72px);
	padding-bottom: 40px;
`;

export const Button = styled.button`
	border: none;
	background: none;
`;

export const FolderContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px 30px 41px 30px;
	width: 100%;
`;

export const Folder = styled(Button)<{ isSelected: boolean }>`
	margin-bottom: 16px;
	background: ${({ isSelected }) => (isSelected ? '#FFD541' : '#e8faf8')};
	border-radius: 5px;

	font-weight: 400;
	font-size: 14px;
	line-height: 34px;

	text-align: center;
	letter-spacing: -0.02em;

	color: #787878;
`;

export const ModalButtonContainer = styled.div`
	width: 100%;

	position: absolute;
	bottom: 41px;

	display: flex;

	padding: 0 32px;
`;

export const ModalButton = styled.div`
	width: 50%;
`;
export const MoveButton = styled(ModalButton)`
	margin-left: 18px;
`;
