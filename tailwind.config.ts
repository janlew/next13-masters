import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Primary Palette
				"blue-primary": "#3498db",
				"blue-secondary": "#2980b9",
				"red-accent": "#e74c3c",

				// Neutral Palette
				background: "#ecf0f1",
				"text-primary": "#2c3e50",
				"text-secondary": "#7f8c8d",
				"border-color": "#bdc3c7",

				// Feedback Palette
				success: "#2ecc71",
				warning: "#f39c12",
				error: "#e74c3c",
				info: "#3498db",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

export default config;
