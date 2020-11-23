const client = require("./graphql-init");
const dayjs = require("dayjs");
const gql = require("graphql-tag");

function minValue(array, attribute) {
    return Math.min.apply(Math, array.map(event => event[attribute]));
}

module.exports = {
    async getWorkshops() {

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

        workshops = workshops.map(workshop => {

            // add time strings
            workshop.events.forEach(event => {
                event.dates = event.dates.map(date => {
                    let formatTemplate = "dddd, DD.MM.YYYY HH:mm";
                    let dates = [dayjs(date.startTime), dayjs(date.endTime)]
                    let sameDay = dates[0].isSame(dates[1], "day");

                    let timeString;

                    if (sameDay)
                        timeString = `${dates[0].format(formatTemplate)} - ${dates[1].format("HH:mm")}`
                    else
                        timeString = `${dates[0].format(formatTemplate)} - ${dates[1].format(formatTemplate)}`

                    // timeString = "12.3.2020 8-16 Uhr" // ToDo: Parse TimeString

                    return {
                        startTime: +dayjs(date.startTime),
                        endTime: +dayjs(date.endTime),
                        timeString: timeString
                    }
                });
            })

            let notStartedEvents = workshop.events.filter(event => event.dates.every(date => date.startTime > Date.now()));

            // sort events based on minimum start time
            notStartedEvents = notStartedEvents.sort((a, b) => minValue(a.dates, "startTime") - minValue(b.dates, "startTime"));

            let minPrice = minValue(notStartedEvents, "price");
            let nextDate = notStartedEvents.length === 0 ? null : minValue(notStartedEvents[0].dates, "startTime");
            let nextDuration = notStartedEvents.length === 0 ? null : Math.floor(notStartedEvents[0].dates.map(date => date.endTime - date.startTime).reduce((a, b) => a + b) / 60 / 1000 / 60);
            let nextParticipants = notStartedEvents.length === 0 ? null : notStartedEvents[0].maxParticipants

            return {
                ...workshop, minPrice, nextDate, nextDuration, nextParticipants
            };
        });
        
        return workshops;
    }
}

