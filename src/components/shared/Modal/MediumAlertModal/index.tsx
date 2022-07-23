import React from 'react';
import AlertModalFrame from '../AlertModalFrame';
import Button from '../../Button';
import * as S from './MediumAlertModal.styled';

interface MediumAlertModalProps {
	image: string;
	contents: string[];
	buttonText: string;
	modalHandler: () => void;
}

const MediumAlertModal = ({ image, contents, buttonText, modalHandler }: MediumAlertModalProps) => {
	return (
		<AlertModalFrame onAlertModal={true}>
			<S.MediumModalContainer>
				<S.Content>
					<img src={image} alt="" />
					{contents?.map((content, idx) => (
						<p key={`${content}-${idx}`}>{content}</p>
					))}
				</S.Content>
				<Button type="button" bgColor="primary" fontWeight="bold" onClick={modalHandler}>
					{buttonText}
				</Button>
			</S.MediumModalContainer>
		</AlertModalFrame>
	);
};

export default MediumAlertModal;
