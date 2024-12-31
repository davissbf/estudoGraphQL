const usuario = async (_: any, args: any, context: any) => {
  const retornoUsuario = await context.axios.get(`http://localhost:3000/users/${args.id}`);

  return retornoUsuario.data;
};

const usuarios = async (_: any, __: any, context: any) => {
  const retornoUsuarios = await context.axios.get("http://localhost:3000/users");

  return retornoUsuarios.data;
};

export const usuarioResolvers = {
  Query: {
    usuario,
    usuarios,
  },
};
