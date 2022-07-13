import React from 'react';
import * as S from './FolderSelect.styled';
import { Props } from './FolderSelect.type';

const FolderSelect = ({ selectedFolderName, folderNames }: Props) => {
	return (
		<S.FolderSelectContainer>
			<S.SelectedFolderWrapper>
				<input id="selected-folder" type="checkbox" value={selectedFolderName} name="selected-folder-name" />
				<label htmlFor="selected-folder">
					{selectedFolderName || '기본 폴더'}
					<span></span>
				</label>
			</S.SelectedFolderWrapper>

			<S.FolderList>
				{/* {folderNames?.map((folderName, idx) => {
					return (
						<S.FolderItem key={idx}>
							<input id={folderName + idx} type="radio" value={folderName} name="tree-folder" />
							<label htmlFor={folderName + idx}>{folderName}</label>
						</S.FolderItem>
					);
				})} */}

				<S.FolderItem>
					<input id="tree-folder-0" type="radio" value="기본 폴더" name="tree-folder" />
					<label htmlFor="tree-folder-0">기본 폴더</label>
				</S.FolderItem>
				<S.FolderItem>
					<input id="tree-folder-1" type="radio" value="기본 폴더" name="tree-folder" />
					<label htmlFor="tree-folder-1">Yapp Web 1팀</label>
				</S.FolderItem>
				<S.FolderItem>
					<input id="tree-folder-2" type="radio" value="기본 폴더" name="tree-folder" />
					<label htmlFor="tree-folder-2">인터페이스 디자인</label>
				</S.FolderItem>
				<S.FolderItem>
					<input id="tree-folder-3" type="radio" value="기본 폴더" name="tree-folder" />
					<label htmlFor="tree-folder-3">인터페이스 디자인</label>
				</S.FolderItem>
				<S.FolderItem>
					<input id="tree-folder-4" type="radio" value="기본 폴더" name="tree-folder" />
					<label htmlFor="tree-folder-4">인터페이스 디자인</label>
				</S.FolderItem>
			</S.FolderList>
		</S.FolderSelectContainer>
	);
};

export default FolderSelect;
