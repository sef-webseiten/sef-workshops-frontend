const client = require("../graphql-init");
const gql = require("graphql-tag");
const { mapWorkshops } = require("./map");

const workshopsQuery = gql`
    query workshops {
        allWorkshops {
            _id
            title
            subTitle
            
            takeaway
            description
            requirements
            content
            
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
                author {_id firstName profilePicture}
                organizerRating {friendly reliable knowledge patience rating}
                workshopRating { recommendable content entertaining rating}
            }
            
            categories
            thumbnail
            events {
                _id
                price
                notes
                visibility
                publicLocation
                maxParticipants
                currentParticipants
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