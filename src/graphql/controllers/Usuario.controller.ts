import { UsuarioService } from "../services/Usuario.service";
import { Usuario } from "../model/interfaces/Usuario";

export class UsuarioController {
  private service: UsuarioService;

  constructor({ service = new UsuarioService() }) { this.service = service; }

  async retornarUsuarioPeloId(id: string): Promise<Usuario> {
    return this.service.retornarUsuarioPeloId(id);
  }

  async retornarTodosUsuarios(): Promise<Array<Usuario>> {
    return this.service.retornarTodosUsuarios();
  }
}
