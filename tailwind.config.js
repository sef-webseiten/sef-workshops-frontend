const customColors = {
    primary: "#60A5FA",
    "primary-background": "#EFF5FB",
    light: "#93C5FD",
    abi: "#FFAA75",
    "abi-background": "#FAF2ED",
    "text-gray": "#1F2937",
};

module.exports = {
    customColors,
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: "1rem",
                sm: "0.25rem"
            },
            boxShadow: {
                "2xl": "0 0 50px -10px rgba(0, 0, 0, 0.25)",
                "xl": "0 0 15px -5px rgba(0, 0, 0, 0.25)"
            },
            width: {
                "fit": "fit-content",
                "18": "4.5rem"
            },
            height: {
                "fit": "fit-content",
                "128": "32rem"
            },
            zIndex: {
                "-10": -10
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
            "dancing-script": "'Dancing Script', cursive"
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
        extend: {
            margin: ["last"],
            backgroundColor: ["checked", 'active', 'disabled']
        },
        cursor: ['responsive', 'disabled'],
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
};