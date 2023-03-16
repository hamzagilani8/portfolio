/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
			black: "#000000",
			"black-light":"#928398",
			blue: "#009BDF",
			green: "#68F590",
			grey: "#758398",
			"blue-light": "#CBD6E5",
			"white-light": "#F6F8FA",
			white: "#fff",
		},
    fontFamily: {
			barlow: ["Barlow Semi Condensed", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
			display: ['Playfair Display', "serif"],
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			lg: "1.15rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			"6xl": "3.5rem",
			"7xl": "4.08rem",
			"8xl": "4.5rem",
		},
    extend: {
      screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
    },
  },
  plugins: [],
}