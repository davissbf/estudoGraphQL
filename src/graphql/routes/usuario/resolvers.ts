import { UsuarioController } from "../../controllers/Usuario.controller";
import { Usuario } from "../../model/interfaces/Usuario";

const controller = new UsuarioController({});

const usuario = async (parent: any, args: any, context: any, info: any): Promise<Usuario> => controller.retornarUsuarioPeloId(args.id);

const usuarios = async (parent: any, args: any, context: any, info: any): Promise<Array<Usuario>> => controller.retornarTodosUsuarios();

export const usuarioResolvers = {
  Query: {
    usuario,
    usuarios,
  },
};
