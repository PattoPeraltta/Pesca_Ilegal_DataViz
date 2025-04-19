import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    }
  }
};

export default config;

