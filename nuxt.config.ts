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
		'nuxt-icon',
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
});
