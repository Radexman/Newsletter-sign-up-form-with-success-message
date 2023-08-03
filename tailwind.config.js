/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1020px',
			xl: '1440px',
		},
		extend: {
			colors: {
				tomato: 'hsl(4, 100%, 67%)',
				darkSlateGray: 'hsl(234, 29%, 20%)',
				charcoalGray: 'hsl(235, 18%, 26%)',
				gray: 'hsl(231, 7%, 60%)',
				white: 'hsl(0, 0%, 100%)',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
