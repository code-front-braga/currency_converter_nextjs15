import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				matteBlack: '#232323',
				orangeRed: '#FF4500',
				lime: '#00FF00',
				orchid: '#DA70D6',
				snow: '#FFFAFA',
				gold: '#FFD700',
			},
		},
	},
	plugins: [],
} satisfies Config;
