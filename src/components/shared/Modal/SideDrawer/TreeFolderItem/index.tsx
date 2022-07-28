import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './TreeFolderItem.styled';
import { Props } from './TreeFolderItem.type';
import { FRUITS } from '@/constants/forest';

const TreeFolderItem = ({
	folder,
	handleEditMoreModalOpen,
	onClickTreeFolderMoreMenuButton,
	onCloseSideDrawer,
}: Props) => {
	const navigator = useNavigate();

	const getSelectedFruitImage = (fruitValue: React.SetStateAction<string | undefined>) => {
		const selectedFruitObj = FRUITS.filter((fruit) => fruit.value === fruitValue)[0];
		return selectedFruitObj?.imgSrc;
	};

	const moveClickedMessages = () => {
		navigator(`/messages/${folder?.id}`);
		onCloseSideDrawer();
	};

	const onEditMoreMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		onClickTreeFolderMoreMenuButton(folder?.id);
		handleEditMoreModalOpen(event);
	};

	return (
		<S.TreeFolderItem id="test" onClick={moveClickedMessages}>
			<S.TreeFolderItemThumbnailWrapper>
				<div>
					<img src={getSelectedFruitImage(folder?.fruit)} alt={''} />
				</div>
				{folder?.name}
			</S.TreeFolderItemThumbnailWrapper>
			<S.TreeFolderItemMoreMenuWrapper>
				<button type="button" onClick={onEditMoreMenuOpen}>
					<svg width="9" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.72266 2.39062C2.11914 2.39746 2.44727 2.0625 2.44727 1.66602C2.44727 1.2627 2.11914 0.93457 1.72266 0.927734C1.31934 0.93457 0.984375 1.2627 0.984375 1.66602C0.984375 2.0625 1.31934 2.39746 1.72266 2.39062ZM4.8743 2.39062C5.27078 2.39746 5.59891 2.0625 5.59891 1.66602C5.59891 1.2627 5.27078 0.93457 4.8743 0.927734C4.47098 0.93457 4.13602 1.2627 4.13602 1.66602C4.13602 2.0625 4.47098 2.39746 4.8743 2.39062ZM8.02594 2.39062C8.42242 2.39746 8.75055 2.0625 8.75055 1.66602C8.75055 1.2627 8.42242 0.93457 8.02594 0.927734C7.62262 0.93457 7.28766 1.2627 7.28766 1.66602C7.28766 2.0625 7.62262 2.39746 8.02594 2.39062Z"
							fill="#4B4B4B"
						/>
					</svg>
				</button>
			</S.TreeFolderItemMoreMenuWrapper>
		</S.TreeFolderItem>
	);
};

export default TreeFolderItem;
