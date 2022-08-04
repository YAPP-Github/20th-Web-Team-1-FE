import { getTreeDetail } from '@/apis/forest';
import { updateReadMessage } from '@/apis/messages';
import LeftButton from '@/assets/images/trees/tree_left_button.svg';
import RightButton from '@/assets/images/trees/tree_right_button.svg';
import { Clouds, MessageBox, Tree, WateringButton } from '@/components/features/NoticeTree';
import { Header, Layout, PublicBottomNav } from '@/components/layout';
import { ErrorToast } from '@/components/shared';
import { errorToastState } from '@/stores/modal';
import { myInfoState } from '@/stores/user';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MessageWithLocationType } from '../NoticeTree/NoticeTree.type';
import * as S from './TreeDetail.styled';
import { AxiosError } from 'axios';
const TreeDetail = () => {
	const { treeId } = useParams();
	const { treeUserId } = useParams();

	const navigate = useNavigate();

	const myInfo = useRecoilValue(myInfoState);
	const [errorToastText, setErrorToastText] = useRecoilState(errorToastState);

	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageWithLocationType | null>(null);
	const [treeMessages, setTreeMessages] = useState<MessageWithLocationType[] | null>(null);

	const userId = treeUserId ? treeUserId : myInfo?.id;

	const { data: treeDetailInfo } = useQuery(
		['readTreeDetail', { treeId: treeId, userId: userId }],
		() => getTreeDetail({ treeId: treeId, userId: String(userId) }),
		{
			onSuccess: (data) => {
				if (data) {
					const newMessages = data.messages.map((message) => ({
						...message,
						width: Math.floor(Math.random() * 100),
						height: Math.floor(Math.random() * 100),
					}));
					newMessages && setTreeMessages(newMessages);
				}
			},
			onError: (error) => {
				const { response } = error as AxiosError;

				if (Boolean(treeUserId) && response) {
					(response.status === 400 || response.status === 404) && navigate('not-found');
				}
				setErrorToastText('네트워크 오류. 나무 정보를 가져올 수 없습니다.');
			},
			enabled: !!treeId,
			retry: 1,
		},
	);

	const updateReadMessageHandler = (messageId: number, selectedIdx: number) => {
		try {
			if (treeMessages) {
				!treeUserId && updateReadMessage(messageId);
				setShowMessage(true);
				setSelectedMessage(treeMessages[selectedIdx]);
			}
		} catch {
			setErrorToastText('네트워크에러');
		}
	};

	const moveTree = (nextTree: number | undefined) => {
		setShowMessage(false);
		setTreeMessages(null);
		navigate(`/forest/tree/${nextTree}`);
	};

	return (
		<Layout path={myInfo ? 'private' : 'public'}>
			<>
				{!myInfo && <Header />}
				<S.TemporaryWrapper>
					<Clouds />

					<S.TreeDetailTextWrapper>
						<S.TreeDetailMainText>
							{treeDetailInfo?.name === 'DEFAULT' ? '기본폴더' : treeDetailInfo?.name}
						</S.TreeDetailMainText>
						<span>맺혀 있는 열매 : {treeMessages?.length}개</span>
					</S.TreeDetailTextWrapper>

					<Tree
						fruitType={treeDetailInfo?.fruitType}
						updateReadMessageHandler={updateReadMessageHandler}
						messages={treeMessages}
					/>

					{showMessage && (
						<MessageBox selectedMessage={selectedMessage} showMessageHandler={() => setShowMessage(false)} />
					)}
					{myInfo && (Number(treeUserId) === myInfo?.id || treeUserId === undefined) ? (
						<>
							<WateringButton treeId={treeId} />

							{treeDetailInfo?.prevId !== 0 && (
								<S.PrevButton onClick={() => moveTree(treeDetailInfo?.prevId)}>
									<img src={LeftButton} alt="이전 메세지 이동" />
								</S.PrevButton>
							)}
							{treeDetailInfo?.nextId !== 0 && (
								<S.NextButton onClick={() => moveTree(treeDetailInfo?.nextId)}>
									<img src={RightButton} alt="다음 메세지 이동" />
								</S.NextButton>
							)}
						</>
					) : (
						<S.PrevButton onClick={() => navigate(-1)}>
							<img src={LeftButton} alt="뒤로가기이미지" />
						</S.PrevButton>
					)}
					{errorToastText && <ErrorToast />}
				</S.TemporaryWrapper>
				{!myInfo && <PublicBottomNav />}
			</>
		</Layout>
	);
};

export default TreeDetail;
