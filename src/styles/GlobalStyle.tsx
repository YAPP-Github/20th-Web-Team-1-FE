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
					position: relative;
					/* max-width: 475px; */
					/* margin: 0 auto; */
					font-family: 'Pretendard';
				}

				#modal-root {
					position: relative;
					width: 475px;
					margin: 0 auto;
					overflow: hidden;
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
