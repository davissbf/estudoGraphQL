const usuario = () => ({
  id: () => "1",
  nome: () => "Davi",
});

const usuarios = () => [
  {
    id: () => "1",
    nome: () => "Davi 1",
  },
  {
    id: () => "2",
    nome: () => "Davi 2",
  },
];

export const usuarioResolvers = {
  Query: {
    usuario,
    usuarios,
  },
};
