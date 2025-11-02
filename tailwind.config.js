const formsPlugin = require('@tailwindcss/forms');
const headlessuiPlugin = require('@headlessui/tailwindcss');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', {lineHeight: '1rem'}],
                sm: ['0.875rem', {lineHeight: '1.5rem'}],
                base: ['1rem', {lineHeight: '1.75rem'}],
                lg: ['1.125rem', {lineHeight: '2rem'}],
                xl: ['1.25rem', {lineHeight: '2rem'}],
                '2xl': ['1.5rem', {lineHeight: '2rem'}],
                '3xl': ['2rem', {lineHeight: '2.5rem'}],
                '4xl': ['2.5rem', {lineHeight: '3.5rem'}],
                '5xl': ['3rem', {lineHeight: '3.5rem'}],
                '6xl': ['3.75rem', {lineHeight: '1'}],
                '7xl': ['4.5rem', {lineHeight: '1.1'}],
                '8xl': ['6rem', {lineHeight: '1'}],
                '9xl': ['8rem', {lineHeight: '1'}],
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                sans: 'var(--font-inter)',
                display: 'var(--font-lexend)',
            },
            maxWidth: {
                '2xl': '40rem',
            },
            colors: {
                'ainleuchtend': {
                    primary: '#2563EB',
                    dark: '#0f172A',
                    light: '#ffffff'
                }
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 40s linear infinite',
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'gradient': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
        },
    },
    plugins: [formsPlugin, headlessuiPlugin],
};
