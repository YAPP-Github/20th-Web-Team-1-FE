import React from 'react';
import { badgeList } from '@/constants/badge';
import Badge from '../Badge/Badge';
import MySetting from '../MySetting/MySetting';
import * as S from './MyContents.styled';

const MyContents = () => {
	return (
		<S.MyContentsContainer>
			<h2 className="a11y-hidden">내 컨텐츠</h2>

			<S.MyBadgeContainer>
				<h3>나의 배지</h3>

				<S.MyBadgeList>
					{badgeList.map(({ name, image }) => (
						<Badge key={name} name={name} image={image} />
					))}
				</S.MyBadgeList>
			</S.MyBadgeContainer>

			<S.MySettingContainer>
				<h3>설정</h3>

				<MySetting
					description="친구에게만 물 받기"
					initialState={false}
					tooltip="친구를 맺은 사람만
					나에게 메시지를 보낼 수 있어요."
					onActivate={() => {}}
					onDeactivate={() => {}}
				/>

				<MySetting
					description="랜덤 메시지 리마인드"
					initialState={false}
					tooltip="이메일로 즐겨찾기한 메시지가
					예상치 못한 순간에 선물처럼 도착해요."
					onActivate={() => {}}
					onDeactivate={() => {}}
				/>

				<MySetting description="나무숲 비활성화" initialState={false} onActivate={() => {}} onDeactivate={() => {}} />
			</S.MySettingContainer>

			<S.LogoutButton type="button">로그아웃하기</S.LogoutButton>
		</S.MyContentsContainer>
	);
};

export default MyContents;
