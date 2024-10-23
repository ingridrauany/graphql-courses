import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { typeDefs, resolvers } from './graphql/schema';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
