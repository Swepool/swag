import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import 'src/lib/theme/global.scss';`
			}
		}),
	],
};

export default config;
