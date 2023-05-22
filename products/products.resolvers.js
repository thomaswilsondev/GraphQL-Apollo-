const productsModel = require("./products.model");
module.exports = {
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
