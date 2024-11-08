import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './resources/**/*.svelte',
    ],
    safelist: [
        {
            pattern: /(?:bg|text|border|outline|hover|focus)-(primary|secondary|success|warning|danger)(-[a-zA-Z0-9]+)?(\/[0-9]+)?/,
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: "hsl(var(--secondary-foreground))"
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: "hsl(var(--success-foreground))"
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: "hsl(var(--warning-foreground))"
                },
                danger: {
                    DEFAULT: 'hsl(var(--danger))',
                    foreground: "hsl(var(--danger-foreground))"
                },
            }
        },
    },
    plugins: [],
};
