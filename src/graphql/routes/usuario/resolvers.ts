import { UsuarioController } from "../../controllers/Usuario.controller";
import { Usuario } from "../../model/interfaces/Usuario";

const controller = new UsuarioController({});

const usuario = async (_: any, args: any): Promise<Usuario> => controller.retornarUsuarioPeloId(args.id);

const usuarios = async (): Promise<Array<Usuario>> => controller.retornarTodosUsuarios();

export const usuarioResolvers = {
  Query: {
    usuario,
    usuarios,
  },
};
