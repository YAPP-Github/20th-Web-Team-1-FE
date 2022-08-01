import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
		tsconfigPaths(),
		vitePluginFaviconsInject('./src/assets/images/shared/favicon.png'),
	],
	build: {
		manifest: true,
	},
});
