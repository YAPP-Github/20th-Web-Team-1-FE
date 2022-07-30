import React from 'react';
import * as S from './ProfileEdit.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { myInfoState } from '@/stores/user';
import useInput from '@/hooks/useInput';
import { editProfile } from '@/apis/users';
import { RESPONSE_SUCCESS_OK } from '@/constants/api';
import withAuth from '@/utils/HOC/withAuth';
import { SmallAlertModal } from '@/components/shared';
import { smallModalState } from '@/stores/modal';

const ProfileEdit = () => {
	const [myInfo, setMyInfo] = useRecoilState(myInfoState);

	const [newNickname, handleNewNickname] = useInput(myInfo?.nickname || '');

	const navigate = useNavigate();

	const [smallModal, setSmallModal] = useRecoilState(smallModalState);

	const handleSubmitEditProfileForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newNickname.length === 0) {
			setSmallModal('닉네임이 입력되지 않았어요!\n닉네임을 입력해주세요.');
			return;
		}

		const status = await editProfile(newNickname);

		if (status === RESPONSE_SUCCESS_OK) {
			navigate('/mypage');

			setMyInfo((prev) => {
				if (prev) {
					return {
						...prev,
						nickname: newNickname,
					};
				}
				return prev;
			});
		}
	};

	return (
		<>
			<main>
				<S.ProfileEditForm onSubmit={handleSubmitEditProfileForm}>
					<S.ProfileEditWrapper>
						<label htmlFor="edit_nickname_input">바꿀 닉네임을 입력해주세요!</label>
						<img src={`${import.meta.env.VITE_API_BASE_URL}/${myInfo?.userImage}`} alt="" />
						<input id="edit_nickname_input" type="text" value={newNickname} onChange={handleNewNickname} />
					</S.ProfileEditWrapper>

					<S.Buttons>
						<Link to="/mypage">취소하기</Link>
						<button type="submit">완료하기</button>
					</S.Buttons>
				</S.ProfileEditForm>
			</main>
			{smallModal && <SmallAlertModal />}
		</>
	);
};

export default withAuth(ProfileEdit);
