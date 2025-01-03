import { ApolloServer } from "apollo-server";
import axios from "axios";
import { typeDefs, resolvers } from "./graphql/schema";

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    axios,
  }),
});

// const clientesArray = [
//   {
//     id: "1",
//     nome: "Davi",
//     email: "davi@gmail.com",
//     endereco: {
//       rua: "rua 1",
//       numero: "1",
//     },
//   },
//   {
//     id: "2",
//     nome: "Lucas",
//     email: "lucas@gmail.com",
//     endereco: {
//       rua: "rua 2",
//       numero: "2",
//     },
//   },
//   {
//     id: "3",
//     nome: "Marcelo",
//     email: "marcelo@gmail.com",
//     endereco: {
//       rua: "rua 3",
//       numero: "3",
//     },
//   },
// ];
//
// const server = new ApolloServer({
//   typeDefs: gql`
//     type Query {
//       clientes: [Cliente!]!,
//       cliente(id: ID): Cliente!,
//       produtos: [Produtos!]!,
//     },
//
//     type Cliente {
//       id: ID,
//       nome: String,
//       email: String,
//       endereco: Endereco!,
//     },
//
//     type Endereco {
//       rua: String,
//       numero: String,
//     }
//
//     type Produtos {
//       id: ID,
//       nome: String,
//       preco: String,
//     }
//   `,
//   resolvers: {
//     Query: {
//       clientes: () => [
//         {
//           id: "1",
//           nome: "Davi",
//           email: "davi@gmail.com",
//           endereco: {
//             rua: "rua 1",
//             numero: "1",
//           },
//         },
//         {
//           id: "2",
//           nome: "Lucas",
//           email: "lucas@gmail.com",
//           endereco: {
//             rua: "rua 2",
//             numero: "2",
//           },
//         },
//         {
//           id: "3",
//           nome: "Marcelo",
//           email: "marcelo@gmail.com",
//           endereco: {
//             rua: "rua 3",
//             numero: "3",
//           },
//         },
//       ],
//       cliente: (parent, args, context, info) => clientesArray.find((cliente) => cliente.id === args.id),
//       produtos: () => [
//         {
//           id: "1",
//           nome: "TV",
//           preco: "2000",
//         },
//         {
//           id: "2",
//           nome: "NotBook",
//           preco: "3000",
//         },
//         {
//           id: "3",
//           nome: "Celular",
//           preco: "1500",
//         },
//       ],
//     },
//   },
// });

server.listen().then(({ url }) => {
  console.log(`Servidor rodando, url: ${url}`);
});
