import { defineConfig } from 'vite';
import { svelte } from './lib/vite-plugin-svelte';


export default defineConfig({
	root: 'src/',
	build: {
		outDir: '../dist/',
		emptyOutDir: true,
	},
	plugins: [
		svelte(),
	],
});
