const client = require("../graphql-init");
const gql = require("graphql-tag");
const { mapWorkshops } = require("./map");

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
                        ratings {
                            content
                            composition
                            clarity
                            expertise
                            goalAchievement
                            text
                            author {
                                firstName
                                profilePicture
                            }
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
            `
        });

        return mapWorkshops(workshops)
    }
}