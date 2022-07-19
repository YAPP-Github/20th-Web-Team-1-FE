import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { myInfoState } from '@/stores/user';
import { deleteTree, getForest } from '@/apis/forest';
import { Folder } from '@/types/forest';
import { useNavigate } from 'react-router-dom';

interface useDrawerProps {
	onToggleOpenDrawer: () => void;
}

const useDrawer = ({ onToggleOpenDrawer }: useDrawerProps) => {
	const myInfo = useRecoilValue(myInfoState);
	const navigator = useNavigate();
	const queryClient = useQueryClient();
	const [checkedTreeId, setCheckedTreeId] = useState<number>();
	const [onEditMoreModal, setOnEditMoreModal] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [isOpenedFolderDeleteAlertModal, setIsOpenedFolderDeleteAlertModal] = useState(false);

	const { data: trees } = useQuery<Folder[] | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
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
