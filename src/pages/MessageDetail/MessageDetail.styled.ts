import { DefaultButton } from '@/components/shared/DefaultButton/DefaultButton.styled';
import styled from '@emotion/styled';

export const Wrapper = styled.main`
	height: calc(100vh - 85px);

	position: relative;
	overflow: hidden;

	background: ${({ theme }) => theme.colors.bt_white};
`;

export const MessageDetailContainer = styled.div`
	width: 100%;
	height: calc(100vh - 233px);

	padding: 0px 32px;
	overflow: auto;
`;

export const MessageContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	padding-bottom: 46px;
`;

export const MessageContent = styled.div`
	display: flex;
	flex-direction: column;

	padding: 30px;
	overflow: auto;

	font-weight: ${({ theme }) => theme.fontWeight.light};
	font-size: ${({ theme }) => theme.fontSize.f14};
	line-height: 24px;

	background: ${({ theme }) => theme.colors.bt_primary[20]};

	border: 0.5px solid ${({ theme }) => theme.colors.bt_primary[200]};
	border-radius: 20px;
`;

export const MessageNavButtonWrapper = styled.div`
	height: 82px;

	position: relative;

	display: flex;
`;

export const Button = styled(DefaultButton)<{ disabled: boolean }>`
	width: calc(50% - 7px);

	position: absolute;
	right: 0;

	display: ${({ disabled }) => (disabled ? 'none' : 'block')};

	padding: 17px 0;

	text-align: center;
	color: ${({ theme }) => theme.colors.bt_white};
	font-size: ${({ theme }) => theme.fontSize.f16};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	line-height: ${({ theme }) => theme.lineHeight.lh16};

	background-color: ${({ theme }) => theme.colors.bt_primary[200]};

	border-radius: 10px;

	:first-of-type {
		left: 0;
	}
`;

export const ArrowIcon = styled.img`
	margin-right: 8px;
`;
export const ArrowDownIcon = styled.img`
	margin-left: 8px;
`;
