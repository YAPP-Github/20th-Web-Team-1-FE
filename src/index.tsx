import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '@/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<BrowserRouter>
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</RecoilRoot>
		</BrowserRouter>
	</ThemeProvider>,
);
