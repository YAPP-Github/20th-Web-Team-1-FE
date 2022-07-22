import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './MessageBox.styled';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { deleteMessage, getMessages } from '@/apis/messages';
import { Message } from '@/types/message';
import { BottomButtons, MakingFruitMenu, MessageContent, MessageMenu } from '@/components/features/MessageBox';
import { DeleteAlertModal, MovingFolderModal, SideDrawer } from '@/components/shared';

const MessageBox = () => {
	const { treeId } = useParams();

	const lastItemRef = useRef<HTMLDivElement>(null);

	const [checkMessages, setCheckMessages] = useState<number[]>([]);
	const [isEdit, setIsEdit] = useState(false);
	const [checkMode, setCheckMode] = useState(false);
	const [isMakingFruit, setIsMakingFruit] = useState(false);
	const [isMoving, setIsMoving] = useState(false);
	const [showCheckedMessages, setShowCheckedMessages] = useState(false);
	const [isOpenedMessageDeleteAlertModal, setIsOpenedMessageDeleteAlertModal] = useState(false);
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const [currentPage, setCurrantPage] = useState(0);
	const [messageList, setMessageList] = useState<Message[] | null>(null);
	const [hasNext, setHasNext] = useState(false);

	const getMessageList = useCallback(async () => {
		const data = await getMessages({ treeId, currentPage: 0 });
		setMessageList(data.responseDto);

		if (data.hasNext) {
			setHasNext(data.hasNext);
			setCurrantPage(currentPage + 1);
		}
	}, [currentPage, treeId]);

	const getMoreMessageList = async () => {
		const data = await getMessages({ treeId, currentPage });

		if (messageList) {
			setMessageList([...messageList, ...data.responseDto]);
		}
		if (data.hasNext) {
			setHasNext(data.hasNext);
			setCurrantPage(currentPage + 1);
			return;
		} else {
			setHasNext(false);
		}
	};

	const { mutate: deleteMutate } = useMutation(() => deleteMessage(checkMessages), {
		onSuccess: () => {
			getMessageList();
		},
	});

	const onToggleCheckMessage = (id: number) => {
		checkMessages.includes(id)
			? setCheckMessages(checkMessages.filter((message) => message !== id))
			: setCheckMessages([...checkMessages, id]);
	};

	const onToggleOpenDrawer = () => {
		setOpenedDrawer(() => !openedDrawer);
	};

	const onToggleMovingFolderModal = () => {
		setIsMoving(!isMoving);
	};

	const onClickDeleteButton = () => {
		if (checkMessages.length > 0) {
			setIsOpenedMessageDeleteAlertModal(true);
		} else {
			alert('1개 이상의 삭제할 메세지를 선택해주세요! ');
		}
	};

	const onClickMovingFolderButton = () => {
		if (checkMessages.length > 0) {
			onToggleMovingFolderModal();
		} else {
			alert('1개 이상의 이동할 메세지를 선택해주세요! ');
		}
	};

	const deleteMessageHandler = () => {
		setIsOpenedMessageDeleteAlertModal(false);
		deleteMutate();
		setCheckMessages([]);
		setIsEdit(false);
	};

	const editMakingToggleHandler = (path: string) => {
		if (path === 'edit') {
			setIsEdit(true);
			setIsMakingFruit(false);
			return;
		}
		if (path === 'making') {
			setIsEdit(false);
			setIsMakingFruit(true);
			return;
		}
		if (path === 'back') {
			setIsEdit(false);
			setIsMakingFruit(false);
		}
	};

	const filteredList =
		showCheckedMessages && messageList
			? messageList.filter((message) => checkMessages.includes(message.id))
			: messageList;

	useEffect(() => {
		setCheckMessages([]);
	}, [checkMode]);

	useEffect(() => {
		setCheckMode(isEdit || isMakingFruit);
	}, [isEdit, isMakingFruit, setCheckMode]);

	useEffect(() => {
		getMessageList();
	}, [treeId]);

	const onIntersect: IntersectionObserverCallback = ([entry]) => {
		entry.isIntersecting && hasNext && getMoreMessageList();
	};

	useEffect(() => {
		let observer: IntersectionObserver;
		if (lastItemRef && lastItemRef.current && hasNext) {
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0.1,
			});

			observer.observe(lastItemRef.current);
		}

		return () => observer && observer.disconnect();
	}, [lastItemRef, lastItemRef.current, onIntersect]);

	return (
		<S.Wrapper>
			{isMakingFruit ? (
				<MakingFruitMenu
					showCheckedMessages={showCheckedMessages}
					setShowCheckedMessages={setShowCheckedMessages}
					numberOfMessages={messageList ? messageList.length : 0}
					numberOfCheckedMessages={checkMessages.length}
				/>
			) : (
				<MessageMenu
					isEdit={isEdit}
					detailTreeName={treeId === 'favorite' ? '즐겨찾기' : !treeId ? '나에게 온 메시지' : undefined}
					editMakingToggleHandler={editMakingToggleHandler}
					onToggleOpenDrawer={onToggleOpenDrawer}
					onToggleMovingFolderModal={onClickMovingFolderButton}
					deleteMessages={onClickDeleteButton}
				/>
			)}

			<S.MessageListContainer checkMode={checkMode} isMakingFruit={isMakingFruit}>
				{filteredList &&
					filteredList.map((res, idx) =>
						idx === filteredList.length - 1 ? (
							<div key={`message-box-message${idx}`} ref={lastItemRef}>
								<MessageContent
									key={`message-box-message${idx}`}
									message={res}
									idx={idx}
									checkMode={checkMode}
									onToggleCheckMessage={onToggleCheckMessage}
									checkMessages={checkMessages}
								/>
							</div>
						) : (
							<div key={`message-box-message${idx}`}>
								<MessageContent
									key={`message-box-message${idx}`}
									message={res}
									idx={idx}
									checkMode={checkMode}
									onToggleCheckMessage={onToggleCheckMessage}
									checkMessages={checkMessages}
								/>
							</div>
						),
					)}
				{messageList && messageList.length === 0 && (
					<S.NoMessageContainer>
						{treeId ? (
							<>
								👀아직 해당 메세지함에 이동한 메세지가 없습니다. <br />
								기본 폴더에서 메세지를 이동해주세요!😸
							</>
						) : (
							<>
								아직 도착한 메세지가 없습니다.
								<br />
								스스로를 위한 메세지를 써보는것은 어떨까요?😸
							</>
						)}
					</S.NoMessageContainer>
				)}

				{checkMode && (
					<BottomButtons
						isEdit={isEdit}
						isMakingFruit={isMakingFruit}
						editMakingToggleHandler={editMakingToggleHandler}
						checkMessages={checkMessages}
						setShowCheckedMessages={setShowCheckedMessages}
					/>
				)}
			</S.MessageListContainer>

			{isMoving && (
				<MovingFolderModal
					isMoving={isMoving}
					setIsEdit={setIsEdit}
					onToggleMovingFolderModal={onToggleMovingFolderModal}
					checkMessages={checkMessages}
					getMessageList={getMessageList}
				/>
			)}

			{isOpenedMessageDeleteAlertModal && (
				<DeleteAlertModal
					deleteTargetType="message"
					deleteTarget="메시지"
					onAlertModal={isOpenedMessageDeleteAlertModal}
					handleAlertModalToggle={() => setIsOpenedMessageDeleteAlertModal(false)}
					handleTargetDelete={deleteMessageHandler}
				/>
			)}

			<SideDrawer onModal={openedDrawer} setOnModal={onToggleOpenDrawer} />
		</S.Wrapper>
	);
};

export default MessageBox;
