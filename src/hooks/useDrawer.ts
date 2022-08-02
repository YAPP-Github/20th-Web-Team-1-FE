import { deleteTree, getForest } from '@/apis/forest';
import { myInfoState } from '@/stores/user';
import { Folder, ForestTrees } from '@/types/forest';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

interface useDrawerProps {
	onToggleOpenDrawer: () => void;
}

const useDrawer = ({ onToggleOpenDrawer }: useDrawerProps) => {
	const myInfo = useRecoilValue(myInfoState);
	const navigator = useNavigate();
	const queryClient = useQueryClient();
	const [checkedTreeId, setCheckedTreeId] = useState<number>();
	const [trees, setTrees] = useState<Folder[] | undefined>(undefined);
	const [onEditMoreModal, setOnEditMoreModal] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [isOpenedFolderDeleteAlertModal, setIsOpenedFolderDeleteAlertModal] = useState(false);

	const { data: treeInfo } = useQuery<ForestTrees | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		onSuccess: () => {
			setTrees(treeInfo?.responseDtoList);
		},
		enabled: !!myInfo,
	});

	const treeDeleteMutation = useMutation(deleteTree, {
		onSuccess: () => {
			queryClient.invalidateQueries('getForest');
			handleFolderDeleteAlertModalToggle('close');
			navigator(`/messages`);
			onToggleOpenDrawer();
		},
	});

	const handleClickTreeFolderMoreMenuButton = (treeId: number) => {
		setCheckedTreeId(treeId);
	};

	const handleFolderDelete = () => {
		treeDeleteMutation.mutate(checkedTreeId);
	};

	const handleEditMoreModalOpen = (event: React.MouseEvent<HTMLElement>) => {
		const closest = event.currentTarget.closest('li') as HTMLLIElement;
		const rect = closest.getBoundingClientRect();
		const newPosition = { top: rect.top, left: rect.left + rect.width };

		setModalPosition(newPosition);
		setOnEditMoreModal(true);
	};

	const handleFolderDeleteAlertModalToggle = (state: 'open' | 'close') => {
		setIsOpenedFolderDeleteAlertModal(state === 'open');
		setOnEditMoreModal(false);
	};

	return {
		myInfo,
		trees,
		checkedTreeId,
		setCheckedTreeId,
		modalPosition,
		onEditMoreModal,
		isOpenedFolderDeleteAlertModal,
		handleClickTreeFolderMoreMenuButton,
		handleFolderDeleteAlertModalToggle,
		handleFolderDelete,
		handleEditMoreModalOpen,
		setOnEditMoreModal,
	};
};

export default useDrawer;
