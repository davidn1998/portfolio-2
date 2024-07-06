// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	srcDir: 'src',
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/eslint',
		'@nuxtjs/color-mode',
		'@nuxt/image',
		'@nuxtjs/google-fonts',
		'@nuxtjs/robots',
		'@nuxt/icon',
	],
	colorMode: {
		preference: 'dark',
		classSuffix: '',
	},
	googleFonts: {
		families: {
			'Open Sans': [300, 400, 600, 700],
			Montserrat: [300, 400, 600, 700],
		},
		display: 'swap',
	},
	postcss: {
		plugins: {
			cssnano:
				process.env.NODE_ENV === 'production'
					? {
							preset: [
								'default',
								{ discardComments: { removeAll: true } },
							],
						}
					: false, // disable cssnano when not in production
		},
	},
});
