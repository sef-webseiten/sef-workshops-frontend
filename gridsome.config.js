// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'SEF Workshops',

    templates: {
        Workshop: "/w/:id"
    },

    plugins: [{
        use: 'gridsome-plugin-tailwindcss',
        options: {
            tailwindConfig: 'tailwind.config.js',
            presetEnvConfig: {},
            shouldPurge: false,
            shouldImport: true,
            shouldTimeTravel: false
        }
    }, {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'src/assets/user/*.md',
            typeName: 'User',
        }
    }, {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'src/assets/timeslot/*.md',
            typeName: 'Timeslot',
        }
    }, {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'src/assets/workshop/*.md',
            typeName: 'Workshop',
            refs: {
                creator: 'User',
                timeslot: "Timeslot"
            }
        }
    }],
}
