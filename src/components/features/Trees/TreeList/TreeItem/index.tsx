import React from 'react';
import * as S from './TreeItem.styled';
import { Link } from 'react-router-dom';
import {
	TreeShapeContainer,
	TreeCircle,
	TreePole,
	Fruit,
} from '@/components/features/Trees/TreeAddForm/TreeAddForm.styled';
import { FRUIT_RENDER_POSITION, FRUITS } from '@/constants/forest';
import { Props } from './TreeItem.type';

const TreeItem = ({ tree }: Props) => {
	const { id, fruit, name } = tree;

	const getSelectedFruitImage = (fruitValue: string) => {
		const selectedFruitObj = FRUITS.filter((fruit) => fruit.value === fruitValue)[0];
		return selectedFruitObj?.imgSrc;
	};

	return (
		<S.ItemWrapper>
			<Link to={`/message/edit/${id}`}>
				<TreeShapeContainer>
					<TreeCircle size="small">
						{FRUIT_RENDER_POSITION.map((info) => {
							return (
								<Fruit key={info.id} src={getSelectedFruitImage(fruit)} alt={''} position={info.position} width={11} />
							);
						})}
					</TreeCircle>
					<TreePole size="small" />
				</TreeShapeContainer>
				<span>{name}</span>
			</Link>
		</S.ItemWrapper>
	);
};

export default TreeItem;
