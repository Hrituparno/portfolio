/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                cyan: {
                    400: '#00ffcc',
                    300: '#33ffdd',
                    200: '#66ffee',
                },
                purple: {
                    400: '#9d4edd',
                    300: '#b565f0',
                },
                pink: {
                    400: '#ff006e',
                },
            },
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float-slow 12s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '33%': { transform: 'translate(30px, -30px) rotate(10deg)' },
                    '66%': { transform: 'translate(-20px, 20px) rotate(-10deg)' },
                },
            },
        },
    },
    plugins: [],
}
