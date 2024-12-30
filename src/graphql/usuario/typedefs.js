import { gql } from "apollo-server";

export const usuarioTypeFefs = gql`
    extend type Query {
      usuario: Usuario!,
      usuarios: [Usuario!]!,
    }
    
    type Usuario {
      id: ID,
      nome: String,
    }
`;
