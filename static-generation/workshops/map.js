const dayjs = require("dayjs");
require("dayjs/locale/de");

dayjs.locale('de');

function minValue(array, attribute) {
    return Math.min.apply(Math, array.map(event => event[attribute]));
}

const workshopDateFormatTemplate = "ddd, DD.MM.YYYY HH:mm";

function addDateTimeString(date) {
    let dates = [dayjs(date.startTime), dayjs(date.endTime)]
    let sameDay = dates[0].isSame(dates[1], "day");

    let timeString;

    if (sameDay)
        timeString = `${dates[0].format(workshopDateFormatTemplate)} - ${dates[1].format("HH:mm")}`
    else
        timeString = `${dates[0].format(workshopDateFormatTemplate)} - ${dates[1].format(workshopDateFormatTemplate)}`

    return {
        startTime: +dayjs(date.startTime),
        endTime: +dayjs(date.endTime),
        timeString: timeString
    }
}

function calculateAverageOfRating(rating) {
    const sum = rating.workshopRating.rating + rating.organizerRating.rating;
    return sum / 2;
}

function calcAbiDate(dates) {

    const startTime = minValue(dates, "startTime"), endTime = Math.max.apply(Math, dates.map(date => date.endTime));

    if (1616968800000 < startTime && endTime < 1617573600000)
        return "o1";
    else if (1617573600000 < startTime && endTime < 1618178400000)
        return "o2";
    else if (1618178400000 < startTime && endTime < 1618783200000)
        return "d";
    else return "all";
}

function mapWorkshops(workshops) {
    return workshops.map(workshop => {

        workshop.path = `/w/${workshop._id}`;

        // add time strings
        workshop.events.forEach(event => {
            event.dates = event.dates.map(addDateTimeString);
            event.abiDate = calcAbiDate(event.dates)
            event.price = event.price / 100;
            event.visible = event.visibility === 'VISIBLE';
            event.bookable = minValue(event.dates, "startTime") > Date.now() && event.maxParticipants > event.currentParticipants;
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

        workshop.ratings = workshop.ratings.map(rating => {
            return {
                ...rating,
                average: calculateAverageOfRating(rating)
            }
        })

        let averageRating = workshop.ratings.map(r => r.average).reduce((a, b) => a + b, 0) / workshop.ratings.length;

        return {
            ...workshop, minPrice, nextDate, nextDuration, nextParticipants, averageRating
        };
    });
}

module.exports = {
    formatTemplate: workshopDateFormatTemplate,
    addDateTimeString,
    calculateAverageOfRating,
    mapWorkshops
}