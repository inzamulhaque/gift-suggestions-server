import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/index.js";
import typeDefs from "./schema.js";

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
