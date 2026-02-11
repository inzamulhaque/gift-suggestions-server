const users = [
  {
    title: "The Awakening",
    name: "Kate Chopin",
  },
  {
    title: "City of Glass",
    name: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

export default resolvers;
