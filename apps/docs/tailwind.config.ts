import type { Config } from 'tailwindcss';
import sharedConfig from 'tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [sharedConfig]
};

export default config;
