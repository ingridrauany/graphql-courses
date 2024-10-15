const user = () => {
  return {
    id: '1',
    userName: 'ingrid',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'ingrid',
    },
    {
      id: '2',
      userName: 'geovana',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
