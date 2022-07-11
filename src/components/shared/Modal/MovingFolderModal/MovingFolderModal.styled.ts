import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
`;
export const ModalInner = styled.div`
	width: 50vw;
	min-width: 350px;
	height: 50vh;
	background: white;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
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

export const Folder = styled(Button)`
	margin-bottom: 16px;
	background: #e8faf8;
	border-radius: 5px;

	font-weight: 400;
	font-size: 14px;
	line-height: 34px;

	text-align: center;
	letter-spacing: -0.02em;

	color: #787878;
`;

export const ModalButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const ModalButton = styled(Button)`
	background: #eeeeee;
	border-radius: 10px;
	padding: 13px 17px;
	width: 110px;
	font-weight: 500;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	letter-spacing: -0.02em;
	color: #787878;
`;
export const MoveButton = styled(ModalButton)`
	margin-left: 18px;
	font-weight: 700;
	background: #00c4b8;
	color: #ffffff;
`;
