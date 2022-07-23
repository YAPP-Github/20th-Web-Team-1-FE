import React, { useState } from 'react';
import * as S from './Tree.styled';
import Apple from '@/assets/images/noticeTree/apple.svg';
import { TreeProps } from './Tree.type';
import TreeImage from '@/assets/images/shared/tree.svg';

const Tree = ({ updateReadMessageHandler, messages }: TreeProps) => {
	const [imageWidth, setImageWidth] = useState(0);

	const onLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.target instanceof HTMLImageElement && setImageWidth(event.target.clientWidth);
	};

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
									src={Apple}
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
