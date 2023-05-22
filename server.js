const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
  type Query {
    # at [Product] then it called be array producer
    products:[Product],
    orders:[Order],
  }
  type Product{
    # The ID of the object.
    id:ID!
    description: String!,
    review :[Review],
    price: Float!,
  }
  type Review{
    rating: Int!,
    comment: String
  }
  # Order
  type Order {
    data: String!,
    subtotal: Float!,
    items:[OrderItem]
  }
  type OrderItem {
    product: Product!,
    quantity: Int!,
  }
`);

const root = {
  products: [
    {
      id: "redshoe",
      description: "Red Shoe",
      price: 42.12,
    },
    {
      id: "blue Jean",
      description: "Blue Jean",
      price: 55.55,
    },
  ],
  orders: [
    {
      data: "2020-05-05",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "redshoe",
            description: "Old Red Shoe",
            price: 45.11,
          },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    //Open graphiQL at http://localhost:3000/graphql
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
