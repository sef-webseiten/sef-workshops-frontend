// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'of.courz',

    templates: {
        Workshops: [
            { name: "default", path: "/w/:_id", component: "./src/templates/workshops/index.vue"},
            { name: "payment-successful", path: "/w/:_id/success", component: "./src/templates/workshops/successful.vue"},
        ]
    },

    plugins: [{
        use: 'gridsome-plugin-tailwindcss',
        options: {
            tailwindConfig: 'tailwind.config.js'
        },
    }],
}