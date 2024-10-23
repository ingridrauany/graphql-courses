import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typeDefs';
import { postTypeDefs } from './post/typeDefs';
import { userResolvers } from './user/resolvers';
import { postResolvers } from './post/resolvers';
import { apiFiltersTypeDefs } from './api-filters/typeDefs';

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

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
