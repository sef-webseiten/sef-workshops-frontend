// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteUrl: "https://of.courz.de",
    siteName: 'of.courz',
    titleTemplate: '%s – of.courz',

    templates: {
        Workshops: "/w/:_id"
    },

    plugins: [{
        use: '@gridsome/plugin-sitemap',
        options: {
            exclude: ['/privacy/', '/agb/', '/kurse/', '/account/orders/', '/account/details/', '/w/6048d3089a4ed8e449eab54c/'],
        }
    }, {
        use: 'gridsome-plugin-tailwindcss',
        options: {
            tailwindConfig: 'tailwind.config.js'
        },
    }],
}