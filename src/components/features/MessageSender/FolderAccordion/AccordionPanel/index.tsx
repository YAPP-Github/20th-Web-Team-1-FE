import React from 'react';
import AccordionPanelView from './AccordionPanelView';
import { AccordionPanelPropsType } from './type';

const AccordionPanel = ({ children }: AccordionPanelPropsType) => {
	return <AccordionPanelView>{children}</AccordionPanelView>;
};

export default AccordionPanel;
