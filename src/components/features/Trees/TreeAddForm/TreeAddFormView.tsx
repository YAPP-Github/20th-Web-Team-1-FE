import React from 'react';
import * as S from './TreeAddForm.styled';
import TreeNameInput from './Input/TreeNameInput';
import TreeFruitInput from './Input/TreeFruitInput';
import ButtonView from '@/components/shared/Button/ButtonView';
import { TreeAddFormViewType } from './type';
import { fruits } from '@/constants/tree';

const TreeAddFormView = ({
	treeName,
	selectedFruit,
	onChangeTreeName,
	onChangeSelectedFruit,
	onSubmitEditedTreeInfo,
	onCloseForm,
}: TreeAddFormViewType) => {
	return (
		<form onSubmit={onSubmitEditedTreeInfo}>
			<S.HelperMessageBox>{/* 알림나무 - 꿀벌 영역 재사용할 예정 */}</S.HelperMessageBox>

			<S.TreeInputContainer>
				<div>
					<div className="tree-name-input-conainter">
						<TreeNameInput
							placeholder="새 폴더 이름을 입력하세요."
							treeName={treeName}
							onChangeTreeName={onChangeTreeName}
							autoFocus
						/>
					</div>

					<S.TreeShapeContainer>
						<div className="tree-shape-top" />
						<div className="tree-shape-bottom" />
					</S.TreeShapeContainer>
				</div>

				<div className="fruit-select-box">
					<ul className="fruit-list">
						{fruits.map((fruit) => (
							<TreeFruitInput
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
