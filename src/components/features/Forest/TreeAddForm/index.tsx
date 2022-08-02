import { getForest, postTree, updateTree } from '@/apis/forest';
import BeeIcon from '@/assets/images/noticeTree/alert_bee.png';
import { Layout } from '@/components/layout';
import Button from '@/components/shared/Button';
import Toast from '@/components/shared/Toast';
import { FRUITS, FRUIT_RENDER_POSITION } from '@/constants/forest';
import { myInfoState } from '@/stores/user';
import { Folder } from '@/types/forest';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TreeFruitInput from './Input/TreeFruitInput';
import TreeNameInput from './Input/TreeNameInput';
import * as S from './TreeAddForm.styled';

const TreeAddForm = () => {
	const navigate = useNavigate();
	const { treeId } = useParams();

	const myInfo = useRecoilValue(myInfoState);

	const { data: trees } = useQuery<Folder[] | undefined>(['getForest', myInfo?.id], () => getForest(myInfo?.id), {
		enabled: !!myInfo,
	});

	const treePostMutation = useMutation(postTree, {
		onSuccess: () => {
			handleGoBackClick();
		},
	});

	const treeUpdateMutation = useMutation(updateTree, {
		onSuccess: () => {
			handleGoBackClick();
		},
	});

	const [treeName, setTreeName] = useState<string>('');
	const [selectedFruit, setSelectedFruit] = useState<string | undefined>(undefined);
	const [isToastVisible, setIsToastVisible] = useState(false);
	const [formAlertMessage, setFormAlertMessage] = useState('');

	const handleChangeTreeName = (treeName: string) => {
		setTreeName(treeName);
	};

	const handleChangeSelectedFruit = (fruit: string) => {
		setSelectedFruit(fruit);
	};

	const getSelectedFruitImage = () => {
		const selectedFruitObj = FRUITS.filter((fruit) => fruit.value === selectedFruit)[0];
		return selectedFruitObj?.imgSrc;
	};

	const handleSubmitEditedTreeInfo = (event: React.FormEvent) => {
		event.preventDefault();

		if (!treeName && !selectedFruit) {
			setFormAlertMessage('나무 이름과 나무 열매를 입력해주세요.');
			setIsToastVisible(true);
			return;
		}

		if (!treeName) {
			setFormAlertMessage('나무 이름을 입력해주세요.');
			setIsToastVisible(true);
			return;
		}

		if (!selectedFruit) {
			setFormAlertMessage('나무 열매를 입력해주세요.');
			setIsToastVisible(true);
			return;
		}

		if (treeId) {
			treeUpdateMutation.mutate({ treeId: Number(treeId), name: treeName, fruitType: selectedFruit }); //
		} else {
			treePostMutation.mutate({ name: treeName, fruitType: selectedFruit });
		}
	};

	const handleGoBackClick = () => {
		navigate(-1);
	};

	useEffect(() => {
		if (treeId) {
			const targetTree = trees?.filter((tree) => tree.id === Number(treeId))[0] as Folder;
			setTreeName(targetTree?.name);
			setSelectedFruit(targetTree?.fruit);
		}
	}, [treeId]);

	return (
		<Layout path={'private'}>
			<S.Container>
				<S.Background />
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
								/>
							</S.TreeNameInputWrapper>

							<S.TreeShapeContainer>
								<S.TreeCircle>
									{FRUIT_RENDER_POSITION.map((info) => {
										return <S.Fruit key={info.id} src={getSelectedFruitImage()} alt={''} position={info.position} />;
									})}
								</S.TreeCircle>
								<S.TreePole />
							</S.TreeShapeContainer>
						</div>

						<S.TreeFruitListWrapper>
							<S.TreeFruitList>
								{FRUITS.map((fruit) => (
									<TreeFruitInput
										key={fruit.id}
										fruit={fruit}
										selected={fruit.value === selectedFruit}
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
						<Button type="button" width="156px" bgColor="normal" fontWeight="medium" onClick={handleGoBackClick}>
							뒤로가기
						</Button>
						<Button type="submit" width="156px" bgColor="primary" fontWeight="bold">
							저장하기
						</Button>
					</S.ButtonBox>
				</S.TreeAddForm>
				<Toast show={isToastVisible} message={formAlertMessage} onClose={() => setIsToastVisible(false)} />
			</S.Container>
		</Layout>
	);
};

export default TreeAddForm;
