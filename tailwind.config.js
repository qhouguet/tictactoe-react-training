/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			maxWidth: {
				desktop: '44rem'
			},
			maxHeight: {
				xl: '36rem',
				lg: '32rem',
				desktop: '44rem'
			},
			fontFamily: {
				sans: ['LexendMega']
			},
			boxShadow: {
				custom: '4px 6px 0 0 rgb(0 0 0 / 1)'
			},
			colors: {
				brutal: {
					bg: '#FEF2E8',
					lightblue: '#DAF5F0',
					lightgreen: '#b5d2ad',
					lightyellow: '#fdfd96',
					lightorange: '#F8D6B3',
					lightpink: '#FCDFFF',
					lightpurple: '#E3DFF2',
					blue: '#87CEEB',
					green: '#90EE90',
					yellow: '#F4D738',
					orange: '#FF7A5C',
					pink: '#FFB2EF',
					purple: '#A388EE',
					darkblue: '#69d2e7',
					darkgreen: '#7fbc8c',
					darkyellow: '#e3a018',
					darkorange: '#ff6b6b',
					darkpink: '#ff69b4',
					darkpurple: '#9723c9'
				}
			}
		}
	},
	plugins: []
};
