module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'mobile-tablet': { max: '768px' },
				'tablets-mobile': { min: '576px', max: '820px' },
				'tablets-desktop': { min: '769px', max: '1024px' },
			},
		},
	},
	plugins: [],
}
