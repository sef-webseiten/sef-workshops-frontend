const client = require("../graphql-init");
const gql = require("graphql-tag");
const { mapWorkshops } = require("./map");

const workshopsQuery = gql`
    query workshops {
        allWorkshops {
            _id
            title
            subTitle
            description
            organizer {
                _id
                firstName
                profilePicture
                occupation
                birthday
            }
            ratings {
                text
                improveable
                author {firstName profilePicture}
                organizerRating {friendly reliable knowledge patience rating}
                workshopRating { recommendable content entertaining rating}
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
                maxParticipants
                dates {
                    startTime
                    endTime
                }
            }
        }
    }
`;

module.exports = {
    workshopsQuery,
    async getWorkshops() {
        let { data: { allWorkshops: workshops } } = await client.query({ query: workshopsQuery });
        return mapWorkshops(workshops)
    }
}