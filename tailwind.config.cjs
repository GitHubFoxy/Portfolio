/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
		'mont': '"Montserrat", sans-serif',
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [],
}
