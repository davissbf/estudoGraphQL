import { gql } from "apollo-server";

export const usuarioTypeDefs = gql`
    extend type Query {
      usuario(id: ID!): Usuario!,
      usuarios: [Usuario!]!,
    }
    
    type Usuario {
      id: ID!
      firstName: String!
      lastName: String!
      userName: String!
      indexRef: Int!
      createdAt: String!
      # posts: [Post!]!
    }
`;
