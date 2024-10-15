const post = () => {
  return {
    id: '1',
    title: 'Test',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Test',
    },
    {
      id: '1',
      title: 'Book',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
