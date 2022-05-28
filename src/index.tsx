import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>,
);
