import styled from '@emotion/styled';

export const MessageChipWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 326px;
	height: 50px;
	margin: auto;
	border-radius: 20px;
	background-color: #e8faf8;
	box-shadow: 0px 0px 10px rgba(0, 196, 184, 0.05);

	& > span {
		line-height: 13px;
		font-size: ${(props) => props.theme.fontSize.f13};
		font-weight: 500;
		letter-spacing: -0.02em;
	}
`;
