/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue"
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'orange': {
                    500: '#f97316',
                    800: '#9A3412',
                },
                'red': {
                    500: '#EF4444',
                }
            }
        },
    },
    plugins: [],
}