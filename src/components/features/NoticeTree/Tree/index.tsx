import React from 'react';
import * as S from './Tree.styled';
import Apple from '@/assets/images/noticeTree/apple.svg';
import { TreeProps } from './Tree.type';

const Tree = ({ readNoticeMessage, messages }: TreeProps) => {
	return (
		<S.TreeWrapper>
			<S.TreeCircle>
				<S.InnerCircle>
					{messages?.map((message, idx) => {
						return (
							<S.Fruit
								key={`noticeTree_fruit_${idx}`}
								src={Apple}
								innerWidth={`${message.width}%`}
								innerHeight={`${message.height}%`}
								onClick={() => readNoticeMessage(message.id, idx)}
							/>
						);
					})}
				</S.InnerCircle>
			</S.TreeCircle>
			<S.TreePole />
		</S.TreeWrapper>
	);
};

export default Tree;
