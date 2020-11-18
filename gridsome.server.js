// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const dayjs = require("dayjs");

const gql = require("graphql-tag");
const { default: ApolloClient } = require("apollo-boost");
const fetch = require("node-fetch").default;

const client = new ApolloClient({
    fetch,
    uri: process.env.GRIDSOME_BACKEND_URL
});

module.exports = function (api) {
    api.loadSource(async action => {

        let { data: { workshops: workshops } } = await client.query({
            query: gql`
                query workshops {
                    workshops {
                        _id
                        title
                        subTitle
                        description
                        # organizer
                        material
                        requirements
                        categories
                        thumbnail
                        minPrice
                        nextDate
                        nextParticipants
                        nextDuration
                        events {
                            _id
                            price
                            notes
                            publicLocation
                            privateLocation
                            maxParticipants
                            dates {
                                startTime
                                endTime
                            }
                        }
                    }
                }
            `
        });

        let workshopsCollection = action.addCollection("Workshops");

        workshops.forEach(workshop => {

            workshop.events.forEach(event => {
                event.dates = event.dates.map(date => {
                    let formatTemplate = "DD.MM.YYYY HH:mm";
                    let dates = [dayjs(date.startTime), dayjs(date.endTime)]
                    let sameDay = dates[0].isSame(dates[1], "day");

                    let timeString;

                    if (sameDay)
                        timeString = `${dates[0].format(formatTemplate)} - ${dates[1].format("HH:mm")}`
                    else
                        timeString = `${dates[0].format(formatTemplate)} - ${dates[1].format(formatTemplate)}`

                    timeString = "12.3.2020 8-16 Uhr" // ToDo: Parse TimeString

                    return {
                        ...date,
                        timeString: timeString
                    }
                });
            })

            workshopsCollection.addNode({
                ...workshop
            });
        });
    })

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}
