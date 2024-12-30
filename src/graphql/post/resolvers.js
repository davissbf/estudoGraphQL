const post = () => ({
  id: "1",
  titulo: "Comentário",
});

const posts = () => [
  {
    id: "1",
    titulo: "Comentado",
  },
  {
    id: "2",
    titulo: "Criado",
  },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
