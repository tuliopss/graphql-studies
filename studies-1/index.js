const { gql, ApolloServer } = require("apollo-server");

const products = [
  {
    id: 12,
    name: "Controle PC",
    price: 190,
  },
  {
    id: 13,
    name: "Mouse LG",
    price: 190,
  },
];

const users = [
  {
    id: 2,
    name: "Let",
    salary: 3000,
    active: true,
    age: 19,
  },
  {
    id: 23,
    name: "Tulio",
    salary: 3000,
    active: true,
    age: 20,
  },
];

const resolvers = {
  Query: {
    users() {
      return users;
    },
    products() {
      return products;
    },

    user(obj, args) {
      const { id, name } = args;
      if (id) {
        return users.find((user) => user.id === id);
      }

      return users.find((user) => user.name === name);
    },

    product(obj, args) {
      const { id, name } = args;

      if (id) {
        return products.find((product) => product.id === id);
      }

      return products.find((product) => product.name === name);
    },
  },
};

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Float
  }

  type User {
    name: String
    age: Int
    salary: Float
    id: ID
    active: Boolean
  }

  type Query {
    users: [User]
    products: [Product]
    user(id: Int, name: String): User
    product(id: Int, name: String): Product
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000, () => console.log("Apollo ON"));
