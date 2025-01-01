import axios from "axios";
import { Post } from "../model/interfaces/Post";

export class PostService {
  async retornarPost(id: string): Promise<Post> {
    try {
      const retornoPost = await axios.get(`http://localhost:3000/posts/${id}`);

      return retornoPost.data;
    } catch (error) {
      throw Error(error);
    }
  }

  async retornarTodosPosts(): Promise<Array<Post>> {
    try {
      const retornoPosts = await axios.get("http://localhost:3000/posts");

      return retornoPosts.data;
    } catch (error) {
      throw Error(error);
    }
  }
}

