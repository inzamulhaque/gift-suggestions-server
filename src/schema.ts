const typeDefs = `#graphql
 
  type User {
  id: ID!
  name: String!
  email: String!
  password: String
  createdAt: String!
  updatedAt: String!
}
 
  type Query {
    users: [User]
  }
`;

export default typeDefs;
