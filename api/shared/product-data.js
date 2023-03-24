const data = {
  products: [
    {
      id: 10,
      name: 'Vial of poison',
      description: '7d6 poison damage, DC 15 Con save, half damage on success',
      quantity: 7,
    },
    {
      id: 20,
      name: 'Bronze arm band',
      description: '5 Gold each',
      quantity: 3,
    },
    {
      id: 30,
      name: 'Platinum arm band',
      description: '10 Gold each',
      quantity: 1,
    },
    {
      id: 50,
      name: 'Underwater breathing necklance',
      description: '',
      quantity: 1,
    },
    {
      id: 60,
      name: 'Silver candle stick',
      description: 'Shiny',
      quantity: 1,
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addProduct = (product) => {
  product.id = getRandomInt();
  data.products.push(product);
  return product;
};

const updateProduct = (product) => {
  const index = data.products.findIndex((v) => v.id === product.id);
  console.log(product);
  data.products.splice(index, 1, product);
  return product;
};

const deleteProduct = (id) => {
  const value = parseInt(id, 10);
  data.products = data.products.filter((v) => v.id !== value);
  return true;
};

const getProducts = () => {
  return data.products;
};

module.exports = { addProduct, updateProduct, deleteProduct, getProducts };
