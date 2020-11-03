module.exports = {
    theme: {
        extend: {
            borderRadius: {
                "default": "1rem"
            },
            boxShadow: {
                "2xl": "0 0 50px -10px rgba(0, 0, 0, 0.25)",
            },
            width: {
                "fit": "fit-content"
            }
        },
        fontFamily: {
            "display": ["Poppins", "sans-serif"],
        },
        container: {
            center: true,
            padding: {
                default: '2rem',
                lg: '4rem',
                xl: '5rem',
            },
        },
    },
    variants: {},
    plugins: [],
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
};