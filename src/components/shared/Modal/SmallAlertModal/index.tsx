import React from 'react';
import AlertModalFrame from '../AlertModalFrame';

import Button from '../../Button';
import { useRecoilState } from 'recoil';
import { smallModalState } from '@/stores/modal';
import * as S from './SmallAlertModal.styled';

const SmallAlertModal = () => {
	const [smallModal, setSmallModal] = useRecoilState(smallModalState);

	return (
		<AlertModalFrame onAlertModal={true} small>
			<S.SmallModalContainer>
				<S.Content>
					<p>{smallModal}</p>
				</S.Content>
				<Button type="button" bgColor="primary" fontWeight="bold" onClick={() => setSmallModal(undefined)}>
					닫기
				</Button>
			</S.SmallModalContainer>
		</AlertModalFrame>
	);
};

export default SmallAlertModal;
