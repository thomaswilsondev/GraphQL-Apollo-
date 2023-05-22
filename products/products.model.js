const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    review: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    review: [],
  },
];

function getAllProducts() {
  return products;
}

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const getProductsByPrice = (min, max) => {
  return products.filter((products) => {
    return products.price >= min && products.price <= max;
  });
};
const getProductsById = (id) => {
  return products.find((id) => products.id === id);
};
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
};
