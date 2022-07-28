import React from 'react';
import * as S from './FolderSelect.styled';
import { Props } from './FolderSelect.type';
import { DEFAULT_FOLDER_NAME } from '@/constants/messageSender';

const FolderSelect = ({
	folders,
	isOpenedFolderBox,
	onToggleSelectedFolderBox,
	selectedFolder,
	handleSelectedFolderChange,
}: Props) => {
	return (
		<S.FolderSelectContainer>
			<S.SelectedFolderWrapper>
				<input
					id="selected-folder"
					type="checkbox"
					value={selectedFolder}
					name="selected-folder-name"
					checked={isOpenedFolderBox}
					onChange={onToggleSelectedFolderBox}
				/>
				<label htmlFor="selected-folder">
					<p>
						{folders?.length === 0 || selectedFolder === DEFAULT_FOLDER_NAME ? DEFAULT_FOLDER_NAME : selectedFolder}
					</p>
					<span></span>
				</label>
			</S.SelectedFolderWrapper>

			<S.FolderList opened={isOpenedFolderBox}>
				<S.FolderItem>
					<input
						id={`default-folder`}
						type="radio"
						value={DEFAULT_FOLDER_NAME}
						name="tree-folder"
						onChange={handleSelectedFolderChange}
						checked={DEFAULT_FOLDER_NAME === selectedFolder}
					/>
					<label htmlFor={`default-folder`}>{DEFAULT_FOLDER_NAME}</label>
				</S.FolderItem>
				{folders?.map((folder) => {
					return (
						<S.FolderItem key={folder?.id}>
							<input
								id={`${folder?.name}${folder?.id}`}
								type="radio"
								value={folder.name}
								name="tree-folder"
								onChange={handleSelectedFolderChange}
								checked={folder.name === selectedFolder}
							/>
							<label htmlFor={`${folder?.name}${folder?.id}`}>{folder?.name}</label>
						</S.FolderItem>
					);
				})}
			</S.FolderList>
		</S.FolderSelectContainer>
	);
};

export default FolderSelect;
