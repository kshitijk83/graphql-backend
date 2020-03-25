const { GraphQLServer } = require('graphql-yoga');

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]
let idCount = links.length;
const resolvers = {
    Query:{
        info:()=>'This is the API of a Hackernews Clone',
        feed: ()=>links,
        link: (parent, args)=>{
            link = links.find(el=>el.id===args.id);
            return link;
        }
    },
    Mutation:{
        post: (parent, args)=>{
            const link={
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link);
            return link;
        },
        updateLink: (parent, args)=>{
            const link = links.find(el=>el.id===args.id);
            link.url = args.url;
            link.description=args.description;
            return link;
        },
        deleteLink:(parent, args)=>{
            const index = links.findIndex(el=>el.id===args.id);
            links.splice(index, 1);
            return links;
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});
server.start(()=>console.log("Server is running on http://localhost:4000"))