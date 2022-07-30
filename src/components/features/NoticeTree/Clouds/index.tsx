import React from 'react';
import * as S from './Clouds.styled';
import SmallLeftCloud from '@/assets/images/noticeTree/small_left_cloud.svg';
import SmallRightCloud from '@/assets/images/noticeTree/small_right_cloud.svg';
import BigCloud from '@/assets/images/noticeTree/big_cloud.svg';
const Clouds = () => {
	const clouds = [
		{ id: 'top_right_cloud', cloudImg: SmallRightCloud, top: '28.2%', left: '67.18%' },
		{ id: 'left_cloud', cloudImg: SmallLeftCloud, top: '52.27%', left: '-7.95%' },
		{ id: 'bottom_right', cloudImg: BigCloud, top: '53.79%', left: '74.87%' },
	];
	return (
		<>
			{clouds.map((cloud) => {
				return <S.CloudImage key={cloud.id} src={cloud.cloudImg} top={cloud.top} left={cloud.left} />;
			})}
		</>
	);
};

export default React.memo(Clouds);
