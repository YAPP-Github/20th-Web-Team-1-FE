import { updateReadMessage } from '@/apis/messages';
import LeftButton from '@/assets/images/trees/tree_left_button.svg';
import RightButton from '@/assets/images/trees/tree_right_button.svg';
import { Clouds, MessageBox, Tree, WateringButton } from '@/components/features/NoticeTree';
import { ErrorToast } from '@/components/shared';
import { errorToastState } from '@/stores/modal';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MessageWithLocationType } from '../NoticeTree/NoticeTree.type';
import * as S from './TreeDetail.styled';
import useTreeDetail from './useTreeDetail';

const TreeDetail = () => {
	const { treeId, treeMessages, treeDetailInfo } = useTreeDetail();

	const [errorToastText, setErrorToastText] = useRecoilState(errorToastState);

	const navigate = useNavigate();

	const [showMessage, setShowMessage] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<MessageWithLocationType | null>(null);

	const updateReadMessageHandler = (messageId: number, selectedIdx: number) => {
		try {
			if (treeMessages) {
				updateReadMessage(messageId);
				setShowMessage(true);
				setSelectedMessage(treeMessages[selectedIdx]);
			}
		} catch {
			setErrorToastText('네트워크에러');
		}
	};

	const moveTree = (nextTree: number | undefined) => {
		setShowMessage(false);
		navigate(`/forest/tree/${nextTree}`);
	};

	return (
		<>
			<S.TemporaryWrapper>
				<Clouds />

				<S.TreeDetailTextWrapper>
					<S.TreeDetailMainText>
						{treeDetailInfo?.name === 'DEFAULT' ? '기본폴더' : treeDetailInfo?.name}
					</S.TreeDetailMainText>
					<span>맺혀 있는 열매 : {treeDetailInfo?.messages.length}개</span>
				</S.TreeDetailTextWrapper>

				<Tree updateReadMessageHandler={updateReadMessageHandler} messages={treeMessages ? treeMessages : null} />

				{showMessage && (
					<MessageBox selectedMessage={selectedMessage} showMessageHandler={() => setShowMessage(false)} />
				)}

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
				{errorToastText && <ErrorToast />}
			</S.TemporaryWrapper>
		</>
	);
};

export default TreeDetail;
