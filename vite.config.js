import svelte from 'vite-plugin-svelte';


/** @type {import('vite').UserConfig} */
let config = {
  plugins: [
    svelte({ immutable: true }),
  ],
};

export default config;
