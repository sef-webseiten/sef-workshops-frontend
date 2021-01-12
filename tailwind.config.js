const customColors = {
    primary: "#60A5FA",
    light: "#93C5FD",
    gray: "#1F2937"
};

module.exports = {
    customColors,
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: "1rem"
            },
            boxShadow: {
                "2xl": "0 0 50px -10px rgba(0, 0, 0, 0.25)",
                "xl": "0 0 15px -5px rgba(0, 0, 0, 0.25)"
            },
            width: {
                "fit": "fit-content"
            },
            height: {
                "fit": "fit-content"
            },

            // Material Design Input field
            transformOrigin: {
                "0": "0%",
            },

            backgroundColor: customColors,
            textColor: customColors,
            borderColor: customColors
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
        }
    },
    variants: {
        backgroundColor: ['responsive', 'active', 'disabled', 'hover'],
        cursor: ['responsive', 'disabled'],
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
};