// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { merge } = require('webpack-merge')

module.exports = {
    siteName: 'Workshops',

    templates: {
        Workshops: "/w/:_id"
    },

    /*configureWebpack(config) {
        if(process.env["npm_lifecycle_event"] === "develop")
            return config;

        return merge({
            // resolve: {
            //     mainFields: ['main', 'browser', 'module']
            //  },
            node: {
                fs: 'empty',
                child_process: 'empty',
                dns: 'empty',
                http2: "empty",
                net: "empty",
                tls: "empty"
            }
        }, config)
    },*/

    plugins: [{
        use: 'gridsome-plugin-tailwindcss',
        options: {
            tailwindConfig: 'tailwind.config.js'
        },
    }],
}
