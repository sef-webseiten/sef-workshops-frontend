const { default: ApolloClient } = require("apollo-boost");
const fetch = require("node-fetch").default;

module.exports = new ApolloClient({
    fetch,
    uri: process.env.GRIDSOME_BACKEND_URL
});
