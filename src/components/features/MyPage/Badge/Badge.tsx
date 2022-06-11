import React from 'react';
import * as S from './Badge.styled';

type Props = {
	name: string;
	image: string;
};

const Badge = ({ name, image }: Props) => {
	return (
		<S.MyBadgeItem>
			<button>
				<img src={image} alt={`${name} 배지 상세 정보 보기`} />
			</button>
			<p>{name}</p>
		</S.MyBadgeItem>
	);
};

export default Badge;
