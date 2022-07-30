import styled from '@emotion/styled';
import { FruitProps } from './Tree.type';

export const TreeWrapper = styled.div`
	width: 100%;
	height: 100%;
	max-width: 475px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	box-sizing: border-box;

	padding-top: 30vh;
`;

export const TreeContainer = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const TreeImage = styled.img`
	width: auto;
	height: 100%;

	object-fit: contain;
`;

export const TreeCircle = styled.div<{ imageWidth: number }>`
	width: ${({ imageWidth }) => (imageWidth ? imageWidth : 0)}px;
	height: ${({ imageWidth }) => (imageWidth ? imageWidth : 0)}px;
	position: absolute;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InnerCircle = styled.div`
	width: 60%;
	height: 60%;

	position: relative;

	z-index: 1;
`;

export const Fruit = styled.img<FruitProps>`
	width: 33px;
	height: 33px;
	position: absolute;
	left: ${({ innerWidth }) => innerWidth};
	top: ${({ innerHeight }) => innerHeight};
	z-index: 1;
`;
