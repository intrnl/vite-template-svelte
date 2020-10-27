import { svelte } from 'vite-plugin-svelte';


/** @type {import('vite').UserConfig} */
let config = {
  plugins: [
    svelte({
      compilerOptions: {
        immutable: true,
      },
    }),
  ],
  rollupDedupe: ['svelte'],
};

export default config;
