import { deleteTree, getForest } from '@/apis/forest';
import { DeleteAlertModal } from '@/components/shared';
import { TREE_SIZE_MAX } from '@/constants/forest';
import { myInfoState } from '@/stores/user';
import { Folder, ForestTrees } from '@/types/forest';
import { default as React, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ModalFrame from '../ModalFrame';
import EditFolderMoreModal from './EditFolderMoreModal';
import * as S from './SideDrawer.styled';
import { Props } from './SideDrawer.type';
import TreeFolderItem from './TreeFolderItem';

const SideDrawer = ({ onModal, setOnModal }: Props) => {
	const myInfo = useRecoilValue(myInfoState);

	const navigator = useNavigate();

	const queryClient = useQueryClient();

	const [checkedTreeId, setCheckedTreeId] = useState<number>();
	const [trees, setTrees] = useState<Folder[] | undefined>(undefined);
	const [onEditMoreModal, setOnEditMoreModal] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [isOpenedFolderDeleteAlertModal, setIsOpenedFolderDeleteAlertModal] = useState(false);

	const checkTreeSizeMax = () => trees && trees?.length < TREE_SIZE_MAX;

	useQuery<ForestTrees | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		onSuccess: (data) => {
			setTrees(data?.responseDtoList);
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

	const onToggleOpenDrawer = () => {
		setOnModal(!onModal);
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

	const getDeleteTargetTreeName = () => {
		return trees?.filter((tree) => tree.id === checkedTreeId)[0]?.name;
	};

	return (
		<ModalFrame onModal={onModal} setOnModal={setOnModal}>
			<S.SideDrawerContainer show={onModal}>
				<S.CloseBtnWrapper>
					<button type="button" onClick={() => setOnModal(false)}>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.57031 14.5938L7.55078 9.61328L12.5312 14.5938L14.4941 12.6309L9.51367 7.62109L14.4941 2.66992L12.5312 0.707031L7.55078 5.6582L2.57031 0.707031L0.607422 2.66992L5.58789 7.62109L0.607422 12.6309L2.57031 14.5938Z"
								fill="#00C4B8"
							/>
						</svg>
					</button>
				</S.CloseBtnWrapper>

				<S.ThumbnailWrapper>
					<S.ThumbnailBox>
						<div>
							<img src={`${import.meta.env.VITE_API_BASE_URL}/${myInfo?.userImage}`} alt="" />
						</div>
						<div>
							<h2>{myInfo?.nickname || '게스트'}의 메시지함</h2>
							<span>{myInfo?.email || 'guest@email.com'}</span>
						</div>
					</S.ThumbnailBox>
				</S.ThumbnailWrapper>

				<S.MessageFilterList>
					<h3>메시지 필터 리스트</h3>
					<S.MessageFilterItem>
						<Link to={'/messages'} onClick={() => setOnModal(false)}>
							나에게 온 메시지
						</Link>
					</S.MessageFilterItem>
					<S.MessageFilterItem>
						<Link to={'/messages/favorite'} onClick={() => setOnModal(false)}>
							즐겨 찾기
						</Link>
					</S.MessageFilterItem>
				</S.MessageFilterList>

				<S.Divider />

				<S.TreeFolderListWrapper>
					<S.TreeFolderListTopMenu>
						<h3>나무 폴더</h3>
					</S.TreeFolderListTopMenu>
					<S.TreeFolderList>
						{trees?.map((tree) => (
							<TreeFolderItem
								key={tree?.id}
								folder={tree}
								handleEditMoreModalOpen={handleEditMoreModalOpen}
								onClickTreeFolderMoreMenuButton={() => setCheckedTreeId(tree?.id)}
								onCloseSideDrawer={() => setOnModal(false)}
							/>
						))}
						{checkTreeSizeMax() && (
							<S.TreeFolderItemAddContainer>
								<S.TreeFolderItemAddBtn to={'/forest/edit'}>
									<span />
									<span />
								</S.TreeFolderItemAddBtn>
							</S.TreeFolderItemAddContainer>
						)}

						{onEditMoreModal && (
							<EditFolderMoreModal
								treeId={checkedTreeId}
								modalPosition={modalPosition}
								onEditMoreModal={onEditMoreModal}
								handleEditMoreModalClose={() => setOnEditMoreModal(false)}
								handleFolderDeleteAlertModalToggle={handleFolderDeleteAlertModalToggle}
							/>
						)}

						{isOpenedFolderDeleteAlertModal && (
							<DeleteAlertModal
								deleteTargetType="folder"
								deleteTarget={getDeleteTargetTreeName()}
								onAlertModal={isOpenedFolderDeleteAlertModal}
								handleAlertModalToggle={() => handleFolderDeleteAlertModalToggle('close')}
								handleTargetDelete={handleFolderDelete}
							/>
						)}
					</S.TreeFolderList>
				</S.TreeFolderListWrapper>
			</S.SideDrawerContainer>
		</ModalFrame>
	);
};

export default SideDrawer;
