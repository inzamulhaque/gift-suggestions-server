import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/index.js";

const typeDefs = `#graphql
 
  type Book {
    title: String
    author: String
  }
 
  type Query {
    books: [Book]
  }
`;

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 7000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

main();
