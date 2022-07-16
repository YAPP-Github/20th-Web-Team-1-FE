import React from 'react';
import AlertModalFrame from '../AlertModalFrame';
import * as S from './DeleteAlertModal.styled';
import Button from '@/components/shared/Button';
import TrashIcon from '@/assets/images/messages/delete_icon.svg';
import { Props } from './DeleteAlertModal.type';

const DeleteAlertModal = ({
	deleteTargetType,
	deleteTarget,
	onAlertModal,
	handleAlertModalToggle,
	handleTargetDelete,
}: Props) => {
	return (
		<AlertModalFrame onAlertModal={onAlertModal}>
			<S.TopImgWrapper>
				<S.TopImage src={TrashIcon} alt="" />
			</S.TopImgWrapper>
			<S.MessageTitle>{deleteTarget}</S.MessageTitle>
			<S.MessageDescWrapper>
				<p>
					<strong>{deleteTarget}</strong> 삭제 시
				</p>
				<p>
					{deleteTargetType === 'message' ? '메시지함' : '폴더'}에 있던{' '}
					{deleteTargetType === 'message' ? '메시지가' : '모든 메일이'} 삭제되며
				</p>
				<p>삭제 후에는 복구할 수 없어요.</p>
				<p>정말 삭제하시겠습니까?</p>
			</S.MessageDescWrapper>
			<S.ButtonWrapper>
				<Button type="button" bgColor="normal" fontWeight="medium" onClick={handleAlertModalToggle}>
					취소하기
				</Button>
				<Button type="button" bgColor="primary" fontWeight="bold" onClick={handleTargetDelete}>
					삭제하기
				</Button>
			</S.ButtonWrapper>
		</AlertModalFrame>
	);
};

export default DeleteAlertModal;
