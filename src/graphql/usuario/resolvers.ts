const usuario = () => ({
  id: () => "1",
  nome: () => "Davi",
});

const usuarios = async (_, __, context) => {
  const retornoUsurios = await context.axios.get("http://localhost:3000/users");

  return retornoUsurios.data;
};

export const usuarioResolvers = {
  Query: {
    usuario,
    usuarios,
  },
};
