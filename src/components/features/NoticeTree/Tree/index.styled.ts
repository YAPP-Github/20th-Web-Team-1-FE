import styled from '@emotion/styled';
import { FruitProps } from './index.type';
export const TreeWrapper = styled.div`
	width: 100%;
	height: auto;
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
`;

const TREE_CIRCLE_SIZE = '261px';
export const TreeCircle = styled.div`
	width: ${TREE_CIRCLE_SIZE};
	height: ${TREE_CIRCLE_SIZE};
	border-radius: 50%;
	background: linear-gradient(148.02deg, #a6ffb2 13.79%, #40e1bf 86.24%);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;
export const TreePole = styled.div`
	margin-bottom: 67px;
	margin-top: -10px;
	width: 38px;
	height: 285px;
	background: linear-gradient(180deg, #ffd5a9 0%, #e88f6b 100%);
`;

export const InnerCircle = styled.div`
	position: relative;
	width: 70%;
	height: 70%;
	z-index: 1;
`;

export const Fruit = styled.img<FruitProps>`
	position: absolute;
	left: ${({ innerWidth }) => innerWidth};
	top: ${({ innerHeight }) => innerHeight};
	z-index: 1;
`;
