import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './TreeAddForm.styled';
import TreeNameInput from './Input/TreeNameInput';
import TreeFruitInput from './Input/TreeFruitInput';
import Button from '@/components/shared/Button';
import BeeIcon from '@/assets/images/noticeTree/alert_bee.svg';
import { fruits } from '@/constants/tree';

const TreeAddForm = () => {
	const navigate = useNavigate();
	const [selectedFruit, setSelectedFruit] = useState('');
	const [treeName, setTreeName] = useState('');

	const handleChangeSelectedFruit = (fruit: string) => {
		setSelectedFruit(fruit);
	};

	const handleChangeTreeName = (treeName: string) => {
		setTreeName(treeName);
	};

	const handleSubmitEditedTreeInfo = (event: React.FormEvent) => {
		event.preventDefault();
	};

	const handleGoBackClick = () => {
		navigate(-1);
	};

	return (
		<S.TreeAddForm onSubmit={handleSubmitEditedTreeInfo}>
			<S.HelperMessageContainer>
				<S.HelperBeeContainer>
					<img src={BeeIcon} alt="가이드 메시지 꿀벌" />
				</S.HelperBeeContainer>
				<S.HelperBeeMessage>
					<p>열매 나무를 편집하시나요?</p>
					<p>나무의 이름도 바꿔보세요.</p>
				</S.HelperBeeMessage>
			</S.HelperMessageContainer>

			<S.TreeInputContainer>
				<div>
					<S.TreeNameInputWrapper>
						<TreeNameInput
							placeholder="새 폴더 이름을 입력하세요."
							treeName={treeName}
							onChangeTreeName={handleChangeTreeName}
							autoFocus
						/>
					</S.TreeNameInputWrapper>

					<S.TreeShapeContainer>
						<div />
						<div />
					</S.TreeShapeContainer>
				</div>

				<S.TreeFruitListWrapper>
					<S.TreeFruitList>
						{fruits.map((fruit) => (
							<TreeFruitInput
								key={fruit.id}
								imgSrc={fruit.imgSrc}
								fruitName={fruit.name}
								selected={fruit.name === selectedFruit}
								onChangeSelectedFruit={handleChangeSelectedFruit}
							/>
						))}
					</S.TreeFruitList>
				</S.TreeFruitListWrapper>
			</S.TreeInputContainer>

			<S.WarnningDescBox>
				<p>※ 나무의 열매에 선택한 메시지가 랜덤하게 배정되며</p>
				<p>임의로 열매의 위치를 선택할 수 없습니다.</p>
			</S.WarnningDescBox>

			<S.ButtonBox>
				<Button type="button" width="156px" bgColor="normal" onClick={handleGoBackClick}>
					뒤로가기
				</Button>
				<Button type="submit" width="156px" bgColor="primary">
					저장하기
				</Button>
			</S.ButtonBox>
		</S.TreeAddForm>
	);
};

export default TreeAddForm;
