import { PostController } from "../../controllers/Post.controller";
import { Post } from "../../model/interfaces/Post";

const controller = new PostController({});

const post = async (parent: any, args: any, context: any, info: any): Promise<Post> => controller.retornarPost(args.id);

const posts = async (parent: any, args: any, context: any, info: any): Promise<Array<Post>> => controller.retornarTodosPosts();

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
