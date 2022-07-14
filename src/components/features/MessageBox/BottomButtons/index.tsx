import React from 'react';
import * as S from './BottomButtons.styled';
import { BottomButtonsProps } from './BottomButtons.type';
import { openMessages } from '@/apis/messages';
import { useMutation, useQueryClient } from 'react-query';

const BottomButtons = ({
	isEdit,
	isMakingFruit,
	editMakingToggleHandler,
	checkMessages,
	setShowCheckedMessages,
}: BottomButtonsProps) => {
	const queryClient = useQueryClient();
	const { mutate: openMessagesMutate } = useMutation(() => openMessages(checkMessages), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const onClickMakeFruitButton = () => {
		openMessagesMutate();
		setShowCheckedMessages(false);
	};

	const onClickBackButton = () => {
		editMakingToggleHandler('back');
		setShowCheckedMessages(false);
	};

	return (
		<S.BackButtonContainer>
			{isEdit && <S.LongButton onClick={() => editMakingToggleHandler('back')}>뒤로가기</S.LongButton>}
			{isMakingFruit && (
				<>
					<S.ShortButton onClick={onClickBackButton}>뒤로가기</S.ShortButton>
					<S.ShortGreenButton onClick={onClickMakeFruitButton}>저장하기</S.ShortGreenButton>
				</>
			)}
		</S.BackButtonContainer>
	);
};

export default BottomButtons;
