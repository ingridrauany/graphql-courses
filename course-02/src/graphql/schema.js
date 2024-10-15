import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typeDefs';
import { postTypeDefs } from './post/typeDefs';
import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';

const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'test',
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
