import React from 'react';
import EditNickNameIcon from '@/assets/images/mypage/edit_nickname_icon.svg';
import CopyUrlIcon from '@/assets/images/mypage/copy_url_icon.svg';
import ProfileBeeImg from '@/assets/images/mypage/profile_bee_img@2x.png';
import * as S from './MyInfo.styled';

const MyInfo = () => {
	return (
		<S.MyInfoContainer>
			<h2 className="a11y-hidden">내 정보</h2>

			<S.MyProfile>
				<h3 className="a11y-hidden">내 프로필</h3>

				<S.MyProfileImageWrapper>
					<img src={ProfileBeeImg} alt="내 프로필 이미지" />
				</S.MyProfileImageWrapper>

				<div>
					<S.MyNameWrapper>
						<p>이름</p>
						<button type="button">
							<img src={EditNickNameIcon} alt="닉네임 수정" />
						</button>
					</S.MyNameWrapper>

					<S.MyEmailWrapper>abc@gmail.com</S.MyEmailWrapper>
				</div>
			</S.MyProfile>

			<S.MyUrlAddress>
				<h3>Url 주소</h3>

				<S.MyUrlCopyWrapper>
					<p>친구와 함께 나무를 무럭무럭 키워보세요!</p>
					<button type="button">
						<img src={CopyUrlIcon} alt="주소 복사" />
					</button>
				</S.MyUrlCopyWrapper>
			</S.MyUrlAddress>
		</S.MyInfoContainer>
	);
};

export default MyInfo;
