export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#C4C788', // Light Green
                    DEFAULT: '#767627', // Olive Green
                    dark: '#4A5B28', // Dark Olive
                },
                accent: {
                    rust: '#963012',
                    orange: '#F08915',
                    yellow: '#FBCF5B',
                    brown: '#AA4B0B',
                },
                neutral: {
                    cream: '#F1E8CE',
                }
            },
            fontFamily: {
                sans: ['Tenor Sans', 'sans-serif'],
                body: ['Biriyani', 'sans-serif'],
                poster: ['Archivo Black', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
