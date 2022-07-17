import React from 'react';
import * as S from './BottomButtons.styled';
import { useMutation, useQueryClient } from 'react-query';
import { updateOpenMessages } from '@/apis/messages';
import { BottomButtonsProps } from './BottomButtons.type';

const BottomButtons = ({
	isEdit,
	isMakingFruit,
	editMakingToggleHandler,
	checkMessages,
	setShowCheckedMessages,
}: BottomButtonsProps) => {
	const queryClient = useQueryClient();
	const { mutate: updateOpenMessagesMutate } = useMutation(() => updateOpenMessages(checkMessages), {
		onSuccess: () => {
			queryClient.invalidateQueries('getMessages');
		},
	});

	const onClickMakeFruitButton = () => {
		updateOpenMessagesMutate();
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
