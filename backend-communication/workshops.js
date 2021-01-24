const client = require("./graphql-init");
const dayjs = require("dayjs");
require("dayjs/locale/de");
const gql = require("graphql-tag");

function minValue(array, attribute) {
    return Math.min.apply(Math, array.map(event => event[attribute]));
}

const formatTemplate = "ddd, DD.MM.YYYY HH:mm";

function addDateTimeString(date) {
    let dates = [dayjs(date.startTime), dayjs(date.endTime)]
    let sameDay = dates[0].isSame(dates[1], "day");

    let timeString;

    if (sameDay)
        timeString = `${dates[0].format(formatTemplate)} - ${dates[1].format("HH:mm")}`
    else
        timeString = `${dates[0].format(formatTemplate)} - ${dates[1].format(formatTemplate)}`

    return {
        startTime: +dayjs(date.startTime),
        endTime: +dayjs(date.endTime),
        timeString: timeString
    }
}

module.exports = {
    async getWorkshops() {

        let { data: { allWorkshops: workshops } } = await client.query({
            query: gql`
                query workshops {
                    allWorkshops {
                        _id
                        title
                        subTitle
                        description
                        organizer {
                            firstName
                            profilePicture
                            occupation
                            birthday
                        }
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

        dayjs.locale('de');

        workshops = workshops.map(workshop => {

            // add time strings
            workshop.events.forEach(event => {
                event.dates = event.dates.map(addDateTimeString);
            })

            let notStartedEvents = workshop.events.filter(event => event.dates.every(date => date.startTime > Date.now()));

            // sort events based on minimum start time
            notStartedEvents = notStartedEvents.sort((a, b) => minValue(a.dates, "startTime") - minValue(b.dates, "startTime"));

            let minPrice = minValue(notStartedEvents, "price");
            let nextDate = notStartedEvents.length === 0 ? null : minValue(notStartedEvents[0].dates, "startTime");
            let nextDuration = notStartedEvents.length === 0 ? null : Math.floor(notStartedEvents[0].dates.map(date => date.endTime - date.startTime).reduce((a, b) => a + b) / 60 / 1000 / 60);
            let nextParticipants = notStartedEvents.length === 0 ? null : notStartedEvents[0].maxParticipants

            if (minPrice === Infinity)
                minPrice = 0;

            return {
                ...workshop, minPrice, nextDate, nextDuration, nextParticipants
            };
        });

        return workshops;
    },
    addDateTimeString,
    formatTemplate
}