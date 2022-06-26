import React from 'react';
import * as S from './SideDrawer.styled';
import ModalFrame from '../ModalFrame';
import { SideDrawerViewPropsType } from './type';

const SideDrawerView = ({ profileImgSrc, username, email, onModal, setOnModal }: SideDrawerViewPropsType) => {
	return (
		<ModalFrame onModal={onModal} setOnModal={setOnModal}>
			<S.SideDrawerContainer show={onModal}>
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

				<S.MessageFilterListWrapper>
					<S.MessageFilterList>
						<li>나에게 온 메시지</li>
						<li>내가 보낸 메시지</li>
						<li>즐겨 찾기</li>
					</S.MessageFilterList>
				</S.MessageFilterListWrapper>

				<S.Divider />

				<S.TreeFolderListWrapper>
					<S.TreeFolderListTopMenu>
						<h3>나무 폴더</h3>
						<button type="button" onClick={() => console.log('순서 바꾸기')}>
							순서 바꾸기
						</button>
					</S.TreeFolderListTopMenu>
					<S.TreeFolderList>
						<S.TreeFolderItem>
							<div className="folder-info">
								<div className="folder-badge">
									<div className="badge-background" />
									<span className="badge-overlap">
										<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M6.5625 3.33333H6.09375V2.38095C6.09375 1.06667 5.04375 0 3.75 0C2.45625 0 1.40625 1.06667 1.40625 2.38095V3.33333H0.9375C0.421875 3.33333 0 3.7619 0 4.28571V9.04762C0 9.57143 0.421875 10 0.9375 10H6.5625C7.07812 10 7.5 9.57143 7.5 9.04762V4.28571C7.5 3.7619 7.07812 3.33333 6.5625 3.33333ZM3.75 7.61905C3.23438 7.61905 2.8125 7.19048 2.8125 6.66667C2.8125 6.14286 3.23438 5.71429 3.75 5.71429C4.26562 5.71429 4.6875 6.14286 4.6875 6.66667C4.6875 7.19048 4.26562 7.61905 3.75 7.61905ZM5.20312 3.33333H2.29687V2.38095C2.29687 1.56667 2.94844 0.904762 3.75 0.904762C4.55156 0.904762 5.20312 1.56667 5.20312 2.38095V3.33333Z"
												fill="#00AEEF"
											/>
										</svg>
									</span>
								</div>
								프로젝트 A
							</div>
							<div className="folder-edit-buttons">
								<button type="button">⏺</button>
							</div>
						</S.TreeFolderItem>
						<S.TreeFolderItemAdd to={'/trees/edit'}>
							<span className="shape row" />
							<span className="shape column" />
						</S.TreeFolderItemAdd>
					</S.TreeFolderList>
				</S.TreeFolderListWrapper>
			</S.SideDrawerContainer>
		</ModalFrame>
	);
};

export default SideDrawerView;
