import React from 'react';
import { Clouds, Tree, MessageBox, WateringButton } from '@/components/features/NoticeTree';
import * as S from './TreeDetail.styled';

import useTreeDetail from './useTreeDetail';
const TreeDetail = () => {
	const {
		treeId,
		treeMessages,
		treeDetailInfo,
		readTreeMessage,
		moveTree,
		showMessage,
		selectedMessage,
		setShowMessage,
	} = useTreeDetail();

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
				<Tree readNoticeMessage={readTreeMessage} messages={treeMessages ? treeMessages : null} />

				{showMessage && (
					<MessageBox selectedMessage={selectedMessage} showMessageHandler={() => setShowMessage(false)} />
				)}

				{treeDetailInfo?.prevId !== 0 && (
					<S.PrevButton onClick={() => moveTree(treeDetailInfo?.prevId)}>{'<'}</S.PrevButton>
				)}
				{treeDetailInfo?.nextId !== 0 && (
					<S.NextButton onClick={() => moveTree(treeDetailInfo?.nextId)}>{'>'}</S.NextButton>
				)}

				<WateringButton treeId={treeId} />
			</S.TemporaryWrapper>
		</>
	);
};

export default TreeDetail;
