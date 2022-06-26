import React from 'react';
import * as S from './index.styled';
import Apple from '@/assets/images/noticeTree/apple.svg';
import { TreeProps } from './index.type';

const Tree = ({ removeFruit, messages }: TreeProps) => {
	return (
		<S.TreeWrapper>
			<S.TreeCircle>
				<S.InnerCircle>
					{messages?.map((arr, idx) => {
						return (
							<S.Fruit
								key={`noticeTree_fruit_${idx}`}
								src={Apple}
								innerWidth={`${arr.width}%`}
								innerHeight={`${arr.height}%`}
								onClick={() => removeFruit && removeFruit(idx)}
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
