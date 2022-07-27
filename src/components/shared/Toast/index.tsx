import React, { useEffect } from 'react';
import * as S from './Toast.styled';

type Props = {
	show: boolean;
	message: string;
	onClose: () => void;
};

const Toast = ({ show, message, onClose }: Props) => {
	useEffect(() => {
		let toastTimer: NodeJS.Timeout;

		if (show) {
			toastTimer = setTimeout(() => {
				onClose();
			}, 1500);
		}

		return () => {
			clearTimeout(toastTimer);
		};
	}, [show]);

	return (
		<S.ToastWrapper show={show}>
			<p>{message}</p>
		</S.ToastWrapper>
	);
};

export default Toast;
