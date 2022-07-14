import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './SideDrawer.styled';
import ModalFrame from '../ModalFrame';
import TreeFolderItem from './TreeFolderItem';
import EditFolderMoreModal from './EditFolderMoreModal';
import Default_Profile_Img from '@/assets/images/noticeTree/alert_bee.svg';
import { Props } from './SideDrawer.type';

const SideDrawer = ({ username, email, profileImg, onModal, setOnModal }: Props) => {
	const [onEditMoreModal, setOnEditMoreModal] = useState(false);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

	const handleEditMoreModalOpen = (event: React.MouseEvent<HTMLElement>) => {
		const closest = event.currentTarget.closest('a') as HTMLAnchorElement;
		const rect = closest.getBoundingClientRect();
		const newPosition = { top: rect.top, left: rect.left + rect.width };

		setModalPosition(newPosition);
		setOnEditMoreModal(true);
	};

	const handleEditMoreModalClose = () => {
		setOnEditMoreModal(false);
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
							<img src={profileImg || Default_Profile_Img} alt="프로필" />
						</div>
						<div>
							<h2>{username || '닉네임'}의 메시지함</h2>
							<span>{email || 'abcde@email.com'}</span>
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
						<TreeFolderItem path={'/messages/#'} handleEditMoreModalOpen={handleEditMoreModalOpen} />
						<TreeFolderItem path={'/messages/#'} handleEditMoreModalOpen={handleEditMoreModalOpen} />
						<S.TreeFolderItemAddContainer>
							<S.TreeFolderItemAddBtn to={'/forest/edit'}>
								<span />
								<span />
							</S.TreeFolderItemAddBtn>
						</S.TreeFolderItemAddContainer>
						{onEditMoreModal && (
							<EditFolderMoreModal
								modalPosition={modalPosition}
								onEditMoreModal={onEditMoreModal}
								setOnEditMoreModal={handleEditMoreModalClose}
							/>
						)}
					</S.TreeFolderList>
				</S.TreeFolderListWrapper>
			</S.SideDrawerContainer>
		</ModalFrame>
	);
};

export default SideDrawer;
