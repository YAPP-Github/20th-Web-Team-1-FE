import { updateOpenMessages } from '@/apis/messages';
import { errorToastState } from '@/stores/modal';
import React from 'react';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import * as S from './BottomButtons.styled';
import { BottomButtonsProps } from './BottomButtons.type';

const BottomButtons = ({
	isEdit,
	isMakingFruit,
	editMakingToggleHandler,
	getMessageList,
	checkMessages,
	setShowCheckedMessages,
	setIsMakingFruit,
}: BottomButtonsProps) => {
	const setErrorToastText = useSetRecoilState(errorToastState);
	const { mutate: updateOpenMessagesMutate } = useMutation(() => updateOpenMessages(checkMessages), {
		onSuccess: () => {
			() => setIsMakingFruit(false);
			setShowCheckedMessages(false);
			editMakingToggleHandler('back');
			getMessageList();
			setErrorToastText('열매 맺기에 성공했습니다! ');
		},
		onError: () => {
			setErrorToastText('네트워크 에러! 열매 맺기에 실패했습니다. ');
		},
	});

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
					<S.ShortGreenButton onClick={() => updateOpenMessagesMutate()}>저장하기</S.ShortGreenButton>
				</>
			)}
		</S.BackButtonContainer>
	);
};

export default BottomButtons;
