import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const server = new ApolloServer({
  typeDefs: gql`
    type User {
      id: ID!
      userName: String!
    }
    type Query {
      hello: String
      isDefined: Boolean!
      arrayString: [String]
      user: User
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'test';
      },
      isDefined: () => {
        return true;
      },
      arrayString: () => {
        return ['A', 'B'];
      },
      user: () => {
        return {
          id: '546465',
          userName: 'userTest',
        };
      },
    },
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
