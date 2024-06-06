/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "Arial"],
                oswald: ["Oswald", "Georgia"]
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                dark: "var(--color-dark)"
            },
            keyframes: {
              fadeInHidden: {
                '0%': { opacity: 0 },
                '100%': { visibility: 'visible', opacity: 1 }
              }
            },
            animation: {
              fadeInHidden: 'fadeInHidden 1s ease-in'
            }
        },
	},
	plugins: [],
}
