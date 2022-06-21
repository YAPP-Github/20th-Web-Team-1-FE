import React from 'react';
import AccordionItemView from './AccordionItemView';
import { AccordionItemPropsType } from './type';

const AccordionItem = ({ children }: AccordionItemPropsType) => {
	return <AccordionItemView>{children}</AccordionItemView>;
};

export default AccordionItem;
