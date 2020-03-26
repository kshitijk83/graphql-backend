const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./src/generated/prisma-client/index');

const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');
const Link = require('./src/resolvers/Link');
const User = require('./src/resolvers/User');

const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request=>{
        return{
            prisma,
            ...request
        }
    },
});
server.start(()=>console.log("Server is running on http://localhost:4000"))