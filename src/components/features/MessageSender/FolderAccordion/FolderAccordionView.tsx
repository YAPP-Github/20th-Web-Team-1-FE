import React from 'react';
import AccordionItem from './AccordionItem';
import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';
import * as S from './FolderAccordion.styled';

const FolderAccordionView = () => {
	return (
		<S.AccordionContainer>
			<AccordionItem>
				<AccordionHeader></AccordionHeader>
				<AccordionPanel></AccordionPanel>
			</AccordionItem>
		</S.AccordionContainer>
	);
};

export default FolderAccordionView;
