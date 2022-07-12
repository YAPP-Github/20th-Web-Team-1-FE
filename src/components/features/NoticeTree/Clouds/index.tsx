import React from 'react';
import * as S from './Clouds.styled';
const Clouds = () => {
	const clouds = [
		{ id: 'top_right_cloud', cloudImg: 'small_right_cloud', top: '28.2%', left: '67.18%' },
		{ id: 'left_cloud', cloudImg: 'small_left_cloud', top: '52.27%', left: '-7.95%' },
		{ id: 'bottom_right', cloudImg: 'big_cloud', top: '53.79%', left: '74.87%' },
	];
	return (
		<>
			{clouds.map((cloud) => {
				return (
					<S.CloudImage
						key={cloud.id}
						src={`/src/assets/images/noticeTree/${cloud.cloudImg}.svg`}
						top={cloud.top}
						left={cloud.left}
					/>
				);
			})}
		</>
	);
};

export default Clouds;
