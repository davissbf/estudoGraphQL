const usuario = async (_, args, context) => {
  const retornoUsuario = await context.axios.get(`http://localhost:3000/users/${args.id}`);

  return retornoUsuario.data;
};

const usuarios = async (_, __, context) => {
  const retornoUsuarios = await context.axios.get("http://localhost:3000/users");

  return retornoUsuarios.data;
};

export const usuarioResolvers = {
  Query: {
    usuario,
    usuarios,
  },
};
