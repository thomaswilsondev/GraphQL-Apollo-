const productsModel = require("./products.model");
module.exports = {
  Mutation: {
    addNewProduct(_, args) {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
  },
  Query: {
    products: () => {
      console.log("Getting the products... ");
      return productsModel.getAllProducts().products;
    },
    productsByPrice: (_, arg) => {
      return productsModel.getProductsByPrice(arg.min, arg.max);
    },
    product: (_, arg) => {
      return productsModel.getProductsById(arg.id);
    },
  },
};
