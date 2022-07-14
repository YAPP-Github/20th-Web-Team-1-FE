import React from 'react';
import * as S from './EditFolderMoreModal.styled';
import EditFolderMoreFrame from '../../EditFolderMoreFrame';
import { Link } from 'react-router-dom';
import { Props } from './EditFolderMoreModal.type';

const EditFolderMoreModal = ({
	treeId,
	modalPosition,
	onEditMoreModal,
	handleEditMoreModalClose,
	handleFolderDeleteAlertModalToggle,
}: Props) => {
	return (
		<EditFolderMoreFrame onEditMoreModal={onEditMoreModal} setOnEditMoreModal={handleEditMoreModalClose}>
			<S.MenuMoreModalContainer position={modalPosition}>
				<S.MenuMoreModalWrapper>
					<ul>
						<li>
							<Link to={`/forest/edit/${treeId}`}>
								<span>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0 9.50035V12H2.49965L9.87196 4.62769L7.37231 2.12804L0 9.50035ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z"
											fill="#00AEEF"
										/>
									</svg>
								</span>
								편집하기
							</Link>
						</li>
						<li>
							<button type="button" onClick={() => handleFolderDeleteAlertModalToggle('open')}>
								<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4.2 0L3.6 0.6H0V1.8H10.8V0.6H7.2L6.6 0H4.2ZM0.819141 3L1.73555 10.9582C1.81475 11.5522 2.3262 12 2.925 12H7.87383C8.47263 12 8.98465 11.5529 9.06445 10.9535L9.98086 3H0.819141Z"
										fill="#00AEEF"
									/>
								</svg>
								삭제하기
							</button>
						</li>
					</ul>
				</S.MenuMoreModalWrapper>
			</S.MenuMoreModalContainer>
		</EditFolderMoreFrame>
	);
};

export default EditFolderMoreModal;
