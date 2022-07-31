import styled from '@emotion/styled';
import { StyledProps } from './TreeAddForm.type';

export const Container = styled.div`
	margin: 0 32px;
`;

export const Background = styled.div`
	width: 100%;
	height: 70.5px;
	background-color: ${({ theme }) => theme.colors.bt_white};
`;

export const TreeAddForm = styled.form`
	position: relative;
	height: calc(100vh - 155.5px);
	padding: 16px 0 30px 0;
	overflow: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const HelperMessageContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 66px;
`;

export const HelperBeeContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 66px;
	height: 66px;
	padding: 7px 8px 8px 7px;
	border-radius: 20px;
	box-shadow: 0px 0px 5px rgba(0, 196, 184, 0.1);
	img {
		width: 51px;
		height: 51px;
	}
`;

export const HelperBeeMessage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 7px;
	border-radius: 20px 20px 20px 0px;
	background: ${({ theme }) => theme.colors.bt_primary[25]};
	box-shadow: 0px 0px 5px rgba(0, 196, 184, 0.1);
	padding: 17px 33px 14px 21px;
	margin-left: 14px;

	& > p:nth-of-type(1) {
		font-size: ${({ theme }) => theme.fontSize.f15};
		font-weight: ${({ theme }) => theme.fontWeight.semiBold};
		line-height: ${({ theme }) => theme.lineHeight.lh15};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[120]};
	}

	& > p:nth-of-type(2) {
		font-size: ${({ theme }) => theme.fontSize.f12};
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		line-height: ${({ theme }) => theme.lineHeight.lh12};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[85]};
	}
`;

export const TreeInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 415px;
	margin: auto;
	margin-top: 27px;
	border: 0.5px solid ${(props) => props.theme.colors.bt_primary[200]};
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.bt_white};
	overflow: hidden;

	& > div:nth-of-type(1) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 287px;
	}
`;

export const TreeNameInputWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
`;

export const TreeShapeContainer = styled.div<{ size?: 'small' | 'medium' }>`
	position: relative;
	bottom: 0;
	width: 100%;
	height: 205.73px;
`;

export const TreeCircle = styled.div<{ size?: 'small' | 'medium' }>`
	position: relative;
	width: ${(props) => (props.size === 'small' ? '68px' : '102px')};
	height: ${(props) => (props.size === 'small' ? '68px' : '102px')};
	top: ${(props) => (props.size === 'small' ? '40px' : '10px')};
	left: ${(props) => (props.size === 'small' ? 'calc(50% - 34px)' : 'calc(50% - 51px)')};
	border-radius: 50%;
	background: linear-gradient(to bottom right, #a6ffb2 0%, #40e1bf 100%);
	z-index: 2;
`;

export const TreePole = styled.div<{ size?: 'small' | 'medium' }>`
	position: absolute;
	width: ${(props) => (props.size === 'small' ? '10px' : '16px')};
	height: ${(props) => (props.size === 'small' ? '92px' : '138px')};
	bottom: 0;
	left: ${(props) => (props.size === 'small' ? 'calc(50% - 5px)' : 'calc(50% - 8px)')};
	background: linear-gradient(to bottom, #ffd3a8 0%, #e9906c 100%);
`;

export const Fruit = styled.img<StyledProps>`
	width: 16px;
	height: 16px;

	position: absolute;
	top: ${({ position }) => position.top + '%'};
	left: ${({ position }) => position.left + '%'};
	width: ${({ width }) => width + 'px' || 'auto'};
	height: auto;
`;

export const TreeFruitListWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 128px;
	background-color: ${(props) => props.theme.colors.bt_primary[20]};
`;

export const TreeFruitList = styled.ul`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 14px 17px;
`;

export const WarnningDescBox = styled.div`
	margin-top: 34px;

	& > p {
		color: ${(props) => props.theme.colors.bt_grey[85]};
		text-align: center;
		font-size: ${(props) => props.theme.fontSize.f13};
		font-weight: ${(props) => props.theme.fontWeight.light};
		font-family: 'Pretendard', 'noto sans';
		line-height: 21px;
		letter-spacing: -0.02em;
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 14px;
	margin-top: 38px;
`;
