import { gql } from "apollo-server";
import { usuarioTypeDefs } from "./routes/usuario/typedefs";
import { usuarioResolvers } from "./routes/usuario/resolvers";
import { postTypeDefs } from "./routes/post/typedefs";
import { postResolvers } from "./routes/post/resolvers";

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
