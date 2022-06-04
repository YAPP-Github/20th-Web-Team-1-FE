import React from 'react';
import MessageChipView from '@/components/shared/MessageChip/MessageChipView';
import ButtonView from '@/components/shared/Button/ButtonView';
import * as S from './Trees.styled';

const TreesView = () => {
	return (
		<main>
			<MessageChipView message="오늘 하루도 고생한 우리에게 따듯한 칭찬을 남겨보세요!" />

			<S.CenterBox>
				<ButtonView type="button" bgColor="primary">
					나무에 물 주기
				</ButtonView>
			</S.CenterBox>
		</main>
	);
};

export default TreesView;
