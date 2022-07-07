import React from 'react';
import * as S from './ProfileEdit.styled';
import ProfileBeeImg from '@/assets/images/mypage/profile_bee_img@2x.png';
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
	return (
		<main>
			<S.ProfileEditForm>
				<S.ProfileEditWrapper>
					<label htmlFor="edit_nickname_input">바꿀 닉네임을 입력해주세요!</label>
					<img src={ProfileBeeImg} alt="" />
					<input id="edit_nickname_input" type="text" />
				</S.ProfileEditWrapper>

				<S.Buttons>
					<Link to="/mypage">취소하기</Link>
					<button type="submit">완료하기</button>
				</S.Buttons>
			</S.ProfileEditForm>
		</main>
	);
};

export default ProfileEdit;
