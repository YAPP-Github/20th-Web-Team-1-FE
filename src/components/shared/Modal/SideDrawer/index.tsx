import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './SideDrawer.styled';
import ModalFrame from '../ModalFrame';
import TreeFolderItem from './TreeFolderItem';
import EditFolderMoreModal from './EditFolderMoreModal';
import Default_Profile_Img from '@/assets/images/noticeTree/alert_bee.svg';
import { Props } from './SideDrawer.type';
import { TREE_SIZE_MAX } from '@/constants/forest';
import { DeleteAlertModal } from '@/components/shared';
import useDrawer from '@/hooks/useDrawer';

const SideDrawer = ({ onModal, setOnModal }: Props) => {
	const {
		myInfo,
		trees,
		checkedTreeId,
		setCheckedTreeId,
		modalPosition,
		onEditMoreModal,
		isOpenedFolderDeleteAlertModal,
		handleFolderDeleteAlertModalToggle,
		handleFolderDelete,
		handleEditMoreModalOpen,
		setOnEditMoreModal,
	} = useDrawer();

	const checkTreeSizeMax = () => trees && trees?.length < TREE_SIZE_MAX;

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
						<Link to={'/messages'}>나에게 온 메시지</Link>
					</S.MessageFilterItem>
					<S.MessageFilterItem>
						<Link to={'/messages/favorite'}>즐겨 찾기</Link>
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
								deleteTarget="프로젝트A"
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
