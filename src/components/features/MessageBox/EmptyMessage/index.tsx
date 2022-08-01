import React from 'react';
import * as S from './EmptyMessage.styled';
import EmptyMessageIcon from '@/assets/images/messages/empty_box_bee.png';
import EmptyFolderIcon from '@/assets/images/messages/empty_folder_bee.png';

const EmptyMessage = ({ treeId }: { treeId: string | undefined }) => {
	return (
		<S.Wrapper>
			{treeId ? (
				<>
					<S.ImageContainer>
						<img src={EmptyFolderIcon} alt="" />
					</S.ImageContainer>
					<p>👀아직 해당 메세지함에 이동한 메세지가 없습니다.</p>
					<p>기본 폴더에서 메세지를 이동해주세요!🍯</p>
				</>
			) : (
				<>
					<S.ImageContainer>
						<img src={EmptyMessageIcon} alt="" />
					</S.ImageContainer>
					<p>👀아직 도착한 메세지가 없습니다...😭</p>

					<p> 스스로를 위한 메세지를 써보는것은 어떨까요?🍯</p>
				</>
			)}
		</S.Wrapper>
	);
};

export default EmptyMessage;
