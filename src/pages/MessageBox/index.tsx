import { getForest } from '@/apis/forest';
import { deleteMessage, getMessages } from '@/apis/messages';
import { BottomButtons, MakingFruitMenu, MessageContent, MessageMenu } from '@/components/features/MessageBox';
import { DeleteAlertModal, MovingFolderModal, SideDrawer, SmallAlertModal } from '@/components/shared';
import { myInfoState } from '@/stores/user';
import { Folder } from '@/types/forest';
import { Message } from '@/types/message';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { smallModalState } from '@/stores/modal';
import * as S from './MessageBox.styled';
import withAuth from '@/utils/HOC/withAuth';

const MessageBox = () => {
	const { treeId } = useParams();
	const [smallModal, setSmallModal] = useRecoilState(smallModalState);

	const myInfo = useRecoilValue(myInfoState);

	const { data: folders } = useQuery<Folder[] | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		enabled: !!myInfo,
	});

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

	const [currentTree, setCurrentTree] = useState<string | undefined>(undefined);

	const lastItemRef = useRef<HTMLDivElement>(null);
	const getMessageList = useCallback(async () => {
		const data = await getMessages({ treeId, currentPage: 0 });

		if (data) {
			setMessageList(data.responseDto);

			if (data.hasNext) {
				setHasNext(data.hasNext);
				setCurrantPage(currentPage + 1);
			}
		} else {
			setSmallModal('네트워크에러');
		}
	}, [currentPage, treeId]);

	const getMoreMessageList = async () => {
		const data = await getMessages({ treeId, currentPage });
		if (data) {
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
		} else setSmallModal('1개 이상의 삭제할 메세지를 선택해주세요!');
	};

	const onClickMovingFolderButton = () => {
		if (checkMessages.length > 0) {
			onToggleMovingFolderModal();
		} else setSmallModal('1개 이상의 이동할 메세지를 선택해주세요!');
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

	useEffect(() => {
		if (treeId === 'favorite' || !treeId) {
			return;
		}
		if (folders && treeId) {
			const idx = folders.findIndex((folder) => folder.id === Number(treeId));
			setCurrentTree(folders[idx].name);
		}
	}, [folders, treeId]);

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
					editMakingToggleHandler={editMakingToggleHandler}
					onToggleOpenDrawer={onToggleOpenDrawer}
					onToggleMovingFolderModal={onClickMovingFolderButton}
					deleteMessages={onClickDeleteButton}
					treeName={currentTree}
				/>
			)}

			<S.MessageListContainer checkMode={checkMode} isMakingFruit={isMakingFruit}>
				{filteredList &&
					filteredList.map((res, idx) => (
						<div key={`message-box-message${res.id}`} ref={idx === filteredList.length - 1 ? lastItemRef : null}>
							<MessageContent
								key={`message-box-message${res.id}`}
								message={res}
								idx={idx}
								checkMode={checkMode}
								onToggleCheckMessage={onToggleCheckMessage}
								checkMessages={checkMessages}
							/>
						</div>
					))}
				{messageList?.length === 0 && (
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
			{smallModal && <SmallAlertModal />}
		</S.Wrapper>
	);
};

export default withAuth(MessageBox);
