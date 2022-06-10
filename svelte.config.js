// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
preprocess: preprocess(),
	
// kit: {adapter: adapter()}
 kit: {
 // hydrate the <div id="svelte"> element in src/app.html
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: null
  }),
  prerender: {
    // This can be false if you're using a fallback (i.e. SPA mode)
    default: true
  }
 }
};

export default config;