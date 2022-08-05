import React, { useState, useRef, useEffect } from 'react';
import * as S from './Tree.styled';
import APPLE from '@/assets/images/trees/apple.png';
import BLUEBERRY from '@/assets/images/trees/blueberry.png';
import GRAPE from '@/assets/images/trees/grape.png';
import LEMON from '@/assets/images/trees/lemon.png';
import ORANGE from '@/assets/images/trees/orange.png';
import STRAWBERRY from '@/assets/images/trees/strawberry.png';

import { TreeProps } from './Tree.type';
import TreeImage from '@/assets/images/shared/tree.svg';

const Tree = ({ updateReadMessageHandler, messages, fruitType }: TreeProps) => {
	const imageRef = useRef<HTMLImageElement>(null);

	const [imageWidth, setImageWidth] = useState<number | undefined>(undefined);

	const fruit =
		fruitType === 'STRAWBERRY'
			? STRAWBERRY
			: fruitType === 'BLUEBERRY'
			? BLUEBERRY
			: fruitType === 'GRAPE'
			? GRAPE
			: fruitType === 'LEMON'
			? LEMON
			: fruitType === 'ORANGE'
			? ORANGE
			: APPLE;

	const changeTreeInnerSize = () => {
		imageRef.current && setImageWidth(imageRef.current.clientWidth);
	};

	useEffect(() => {
		changeTreeInnerSize();
	}, [imageRef?.current?.clientWidth]);

	useEffect(() => {
		window.addEventListener('resize', changeTreeInnerSize);
		return () => window.removeEventListener('resize', changeTreeInnerSize);
	}, []);

	return (
		<S.TreeWrapper>
			<S.TreeContainer>
				<S.TreeImage src={TreeImage} alt="" ref={imageRef} />
				{imageWidth !== undefined && (
					<S.TreeCircle imageWidth={imageWidth}>
						<S.InnerCircle>
							{messages?.map((message, idx) => {
								return (
									<S.Fruit
										key={`noticeTree_fruit_${message.id}`}
										src={fruit}
										innerWidth={`${message.width}%`}
										innerHeight={`${message.height}%`}
										onClick={() => updateReadMessageHandler(message.id, idx)}
									/>
								);
							})}
						</S.InnerCircle>
					</S.TreeCircle>
				)}
			</S.TreeContainer>
		</S.TreeWrapper>
	);
};

export default Tree;
