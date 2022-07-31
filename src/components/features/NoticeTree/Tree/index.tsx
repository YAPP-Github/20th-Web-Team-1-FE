import React, { useState } from 'react';
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
	const [imageWidth, setImageWidth] = useState(0);

	const onLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.target instanceof HTMLImageElement && setImageWidth(event.target.clientWidth);
	};

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

	return (
		<S.TreeWrapper>
			<S.TreeContainer>
				<S.TreeImage src={TreeImage} alt="" onLoad={onLoad} />
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
			</S.TreeContainer>
		</S.TreeWrapper>
	);
};

export default Tree;
