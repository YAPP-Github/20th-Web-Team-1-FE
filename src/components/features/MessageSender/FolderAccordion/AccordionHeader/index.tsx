import React from 'react';
import AccordionHeaderView from './AccordionHeaderView';
import { AccordionHeaderPropsType } from './type';

const AccordionHeader = ({ children }: AccordionHeaderPropsType) => {
	return <AccordionHeaderView>{children}</AccordionHeaderView>;
};

export default AccordionHeader;
