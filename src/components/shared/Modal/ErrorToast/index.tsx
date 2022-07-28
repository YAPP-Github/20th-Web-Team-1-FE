import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './ErrorToast.styled';
import { errorToastState } from '@/stores/modal';

const ErrorToast = () => {
	const [errorToastText, setErrorToastText] = useRecoilState(errorToastState);

	useEffect(() => {
		const toastTimer: NodeJS.Timeout = setTimeout(() => {
			setErrorToastText(undefined);
		}, 5000);

		return () => {
			clearTimeout(toastTimer);
			setErrorToastText(undefined);
		};
	}, []);

	return (
		<S.ToastWrapper>
			<p>{errorToastText}</p>
		</S.ToastWrapper>
	);
};

export default ErrorToast;
