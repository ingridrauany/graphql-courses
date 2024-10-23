const post = async (_, { id }, { getPosts }) => {
  const post = await await getPosts('/' + id);
  return post.json();
};

const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    },
  },
};
