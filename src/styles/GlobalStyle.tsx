import * as React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				${reset}

				*, *::before, *::after {
					box-sizing: border-box;
					font-family: 'Pretendard', 'noto sans';
				}

				body {
					max-width: 480px;
					position: relative;
					margin: auto;
				}

				li {
					list-style: none;
				}

				a {
					text-decoration: none;
				}

				button {
					cursor: pointer;
				}

				.a11y-hidden {
					position: absolute;
					clip: rect(0, 0, 0, 0);
					width: 1px;
					height: 1px;
					overflow: hidden;
					margin: -1px;
					border: 0;
					padding: 0;
					white-space: nowrap;
				}
			`}
		/>
	);
};

export default GlobalStyle;
