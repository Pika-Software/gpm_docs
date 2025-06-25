/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			"sm": "0.694rem",
			"base": "1rem",
			"xl": "1.2rem",
			"2xl": "1.44rem",
			"3xl": "1.728rem",
			"4xl": "2.074rem",
			"5xl": "2.488rem",
			"6xl": "2.986rem",
		},

		extend: {
			maxWidth: {
				"hd": "40em"
			}
		}
	},
	plugins: [],
}
