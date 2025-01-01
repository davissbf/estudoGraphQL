import { PostService } from "../services/Post.service";
import { Post } from "../model/interfaces/Post";

export class PostController {
  private service: PostService;

  constructor({ service = new PostService() }) { this.service = service; }

  async retornarPost(id: string): Promise<Post> {
    return this.service.retornarPost(id);
  }

  async retornarTodosPosts(): Promise<Array<Post>> {
    return this.service.retornarTodosPosts();
  }
}
