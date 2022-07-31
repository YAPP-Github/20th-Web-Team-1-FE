import React from 'react';
import AlertModalFrame from '../AlertModalFrame';
import Button from '../../Button';
import * as S from './MediumAlertModal.styled';

interface MediumAlertModalProps {
	image: string;
	width: number;
	height: number;
	contents: string[];
	buttonText: string;
	modalHandler: () => void;
}

const MediumAlertModal = ({ image, contents, buttonText, modalHandler, width, height }: MediumAlertModalProps) => {
	return (
		<AlertModalFrame onAlertModal={true}>
			<S.MediumModalContainer>
				<S.Content>
					<img src={image} alt="" style={{ width: `${width}px`, height: `${height}px` }} />
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
