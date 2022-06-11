import React from 'react';
import ButtonView from '@/components/shared/Button/ButtonView';
import ClickableFruitChip from './../../../shared/Chip/ClickableFruitChip';
import * as S from './TreeAddForm.styled';
import { TreeAddFormViewType } from './type';
import { fruits } from '@/constants/tree';

const TreeAddFormView = ({ selectedFruit, onChangeSelectedFruit, onCloseForm }: TreeAddFormViewType) => {
	return (
		<form action="">
			<S.TreeInputContainer>
				<div>
					<div></div>
				</div>
				<div className="fruit-select-box">
					<ul className="fruit-list">
						{fruits.map((fruit) => (
							<ClickableFruitChip
								key={fruit.id}
								imgSrc={fruit.imgSrc}
								fruitName={fruit.name}
								selected={fruit.name === selectedFruit}
								onChangeSelectedFruit={onChangeSelectedFruit}
							/>
						))}
					</ul>
				</div>
			</S.TreeInputContainer>

			<S.WarnningDescBox>
				<p>※ 나무의 열매에 선택한 메시지가 랜덤하게 배정되며</p>
				<p>임의로 열매의 위치를 선택할 수 없습니다.</p>
			</S.WarnningDescBox>

			<S.ButtonBox>
				<ButtonView type="button" width="156px" bgColor="normal" onClick={onCloseForm}>
					뒤로가기
				</ButtonView>
				<ButtonView type="submit" width="156px" bgColor="primary">
					저장하기
				</ButtonView>
			</S.ButtonBox>
		</form>
	);
};

export default TreeAddFormView;
