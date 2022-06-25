import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
	const modalRoot = document.getElementById('modal-root') as HTMLElement;

	return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
