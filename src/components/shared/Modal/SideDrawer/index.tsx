import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as S from './SideDrawer.styled';
import ModalFrame from '../ModalFrame';
import TreeFolderItem from './TreeFolderItem';
import EditFolderMoreModal from './EditFolderMoreModal';
import Default_Profile_Img from '@/assets/images/noticeTree/alert_bee.svg';
import { Props } from './SideDrawer.type';
import { useRecoilValue } from 'recoil';
import { myInfoState } from '@/stores/user';
import { Folder } from '@/types/forest';
import { readUserForest } from '@/apis/forest';
import { MAX_TREE_SIZE } from '@/constants/forest';

const SideDrawer = ({
	onModal,
	setOnModal,
	onEditMoreModal,
	modalPosition,
	handleEditMoreModalOpen,
	handleEditMoreModalClose,
	handleFolderDeleteAlertModalToggle,
}: Props) => {
	const myInfo = useRecoilValue(myInfoState);

	const { data: folders } = useQuery<Folder[] | undefined>(['readUserForest'], () => readUserForest(myInfo?.id), {
		refetchOnWindowFocus: false,
		retry: 1,
	});

	const [checkedTreeId, setCheckedTreeId] = useState<number>();

	const handleClickTreeFolderMoreMenuButton = (treeId: number) => {
		setCheckedTreeId(treeId);
	};

	const checkTreeSizeMax = () => folders && folders?.length < MAX_TREE_SIZE;

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
							<img src={myInfo?.userImage || Default_Profile_Img} alt="프로필" />
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
						<Link to={''}>나에게 온 메시지</Link>
					</S.MessageFilterItem>
					<S.MessageFilterItem>
						<Link to={''}>즐겨 찾기</Link>
					</S.MessageFilterItem>
				</S.MessageFilterList>

				<S.Divider />

				<S.TreeFolderListWrapper>
					<S.TreeFolderListTopMenu>
						<h3>나무 폴더</h3>
					</S.TreeFolderListTopMenu>
					<S.TreeFolderList>
						{folders?.map((folder) => (
							<TreeFolderItem
								key={folder?.id}
								folder={folder}
								handleEditMoreModalOpen={handleEditMoreModalOpen}
								onClickTreeFolderMoreMenuButton={handleClickTreeFolderMoreMenuButton}
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
								handleEditMoreModalClose={handleEditMoreModalClose}
								handleFolderDeleteAlertModalToggle={handleFolderDeleteAlertModalToggle}
							/>
						)}
					</S.TreeFolderList>
				</S.TreeFolderListWrapper>
			</S.SideDrawerContainer>
		</ModalFrame>
	);
};

export default SideDrawer;
