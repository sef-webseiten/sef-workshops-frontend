module.exports = {
    theme: {
        extend: {
            borderRadius: {
                "default": "1rem"
            }
        },
        fontFamily: {

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
    variants: {
    },
    plugins: [],
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
};