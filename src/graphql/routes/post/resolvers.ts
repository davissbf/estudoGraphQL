import { PostController } from "../../controllers/Post.controller";
import { Post } from "../../model/interfaces/Post";

const controller = new PostController({});

const post = async (_, args): Promise<Post> => controller.retornarPost(args.id);

const posts = async (): Promise<Array<Post>> => controller.retornarTodosPosts();

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
