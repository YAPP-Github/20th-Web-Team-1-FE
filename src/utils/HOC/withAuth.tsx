import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkMyInfo } from '@/apis/users';
import { RESPONSE_SUCCESS_OK } from '@/constants/api';

const withAuth = (Component: any) => {
	const AuthenticatedComponent = () => {
		const navigate = useNavigate();

		const [isAllowed, setIsAllowed] = useState(false);

		const handleCheckIsLoggedIn = async () => {
			try {
				const response = await checkMyInfo();

				if (response?.status === RESPONSE_SUCCESS_OK) {
					setIsAllowed(true);
				} else {
					navigate('/login', {
						replace: true,
					});
				}
			} catch (error) {
				navigate('/login', {
					replace: true,
				});
			}
		};

		useEffect(() => {
			handleCheckIsLoggedIn();
		}, []);

		return isAllowed ? <Component /> : <></>;
	};

	return AuthenticatedComponent;
};

export default withAuth;
