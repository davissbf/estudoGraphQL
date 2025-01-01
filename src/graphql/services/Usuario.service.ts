import axios from "axios";
import { Usuario } from "../model/interfaces/Usuario";

export class UsuarioService {
  async retornarUsuarioPeloId(id: string): Promise<Usuario> {
    try {
      const retornoUsuario = await axios.get(`http://localhost:3000/users/${id}`);

      return retornoUsuario.data;
    } catch (error) {
      throw Error(error);
    }
  }

  async retornarTodosUsuarios(): Promise<Array<Usuario>> {
    try {
      const retornoUsuario = await axios.get("http://localhost:3000/users");

      return retornoUsuario.data;
    } catch (error) {
      throw Error(error);
    }
  }
}

