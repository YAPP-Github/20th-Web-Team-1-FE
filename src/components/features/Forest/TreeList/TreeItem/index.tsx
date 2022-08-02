import {
	Fruit,
	TreeCircle,
	TreePole,
	TreeShapeContainer,
} from '@/components/features/Forest/TreeAddForm/TreeAddForm.styled';
import { FRUITS, FRUIT_RENDER_POSITION } from '@/constants/forest';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './TreeItem.styled';
import { Props } from './TreeItem.type';

const TreeItem = ({ tree }: Props) => {
	const { id, fruit, name } = tree;

	const { userId } = useParams();

	const getSelectedFruitImage = (fruitValue: React.SetStateAction<string | undefined>) => {
		const selectedFruitObj = FRUITS.filter((fruit) => fruit.value === fruitValue)[0];
		return selectedFruitObj?.imgSrc;
	};

	return (
		<S.ItemWrapper>
			<Link to={userId ? `/forest/tree/${id}/${userId}` : `/forest/tree/${id}`}>
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
