module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "var(--white)",
				black: "var(--black)",
				pink: "var(--pink)",
				green: "var(--green)",
				yellow: "var(--yellow)"
			},
		},
	},
	plugins: [],
};
