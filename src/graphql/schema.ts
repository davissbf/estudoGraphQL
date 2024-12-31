import { gql } from "apollo-server";
import { usuarioTypeDefs } from "./usuario/typedefs";
import { usuarioResolvers } from "./usuario/resolvers";
import { postTypeDefs } from "./post/typedefs";
import { postResolvers } from "./post/resolvers";

const rootTypeDefs = gql`
    type Query {
      _empty: Boolean,
    }
  `;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, usuarioTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, usuarioResolvers, postResolvers];
