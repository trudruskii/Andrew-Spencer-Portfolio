/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
    theme: {
        screens: {
            'xs': '320px',
            'sm': '640px',
            'md': '786px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        extend: {
            animation: {
                text: 'text 6s ease infinite',
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('daisyui'),
        require('flowbite/plugin')
    ],
}