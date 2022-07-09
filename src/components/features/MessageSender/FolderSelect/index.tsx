import React from 'react';
import * as S from './FolderSelect.styled';

const FolderSelect = () => {
	return (
		<S.FolderSelect name="selected-tree">
			<option value="기폰 폴더">기본 폴더</option>
			<option value="Yapp Web 1팀">Yapp Web 1팀</option>
			<option value="인터페이스 디자인팀">인터페이스 디자인팀</option>
		</S.FolderSelect>
	);
};

export default FolderSelect;
