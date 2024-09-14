const { gql, ApolloServer } = require("apollo-server");

const resolvers = {
  Query: {
    age() {
      return 18;
    },

    name() {
      return "Tulio";
    },
    id() {
      return "3124124";
    },
    salary() {
      return 1999;
    },
    active() {
      return true;
    },
    techs() {
      return ["CSS"];
    },
  },
};

const typeDefs = gql`
  type Query {
    name: String
    age: Int
    salary: Float
    id: ID
    active: Boolean
    techs: [String!]!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000, () => console.log("Apollo ON"));
