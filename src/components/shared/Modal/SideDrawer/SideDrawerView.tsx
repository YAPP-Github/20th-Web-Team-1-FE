import React from 'react';
import * as S from './SideDrawer.styled';
import ModalFrame from '../ModalFrame';
import TreeFolderItem from './TreeFolderItem';
import { SideDrawerViewPropsType } from './type';
import MenuMoreModal from './MenuMoreModal/index';
import { Link } from 'react-router-dom';

const SideDrawerView = ({
	profileImgSrc,
	username,
	email,
	onModal,
	onMenuMoreModal,
	setOnModal,
	setOnMenuMoreModal,
}: SideDrawerViewPropsType) => {
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
						<div className="thumbnail-img">
							<img src={profileImgSrc} alt="프로필" />
						</div>
						<div className="thumbnail-info">
							<h2>{username}의 메시지함</h2>
							<span>{email}</span>
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
						<TreeFolderItem path={''} />
						<TreeFolderItem path={''} />
						<S.TreeFolderItemAdd to={''}>
							<span className="shape row" />
							<span className="shape column" />
						</S.TreeFolderItemAdd>
						{onMenuMoreModal && <MenuMoreModal setOnMenuMoreModal={setOnMenuMoreModal} />}
					</S.TreeFolderList>
				</S.TreeFolderListWrapper>
			</S.SideDrawerContainer>
		</ModalFrame>
	);
};

export default SideDrawerView;
