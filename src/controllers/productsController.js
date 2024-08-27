const products = require('../data/productsData');

const getProducts = (req, res) => {
  const { categoryname } = req.params;
  const { n, sort, page = 1 } = req.query;

  // Filter products by category
  let filteredProducts = products.filter(product => product.category === categoryname);

  // Sorting logic
  if (sort === 'price') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'rating') {
    filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Pagination logic
  const limit = parseInt(n, 10) || 10;
  const startIndex = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + limit);

  res.json(paginatedProducts);
};

const getProductById = (req, res) => {
  const { productid } = req.params;
  const product = products.find(p => p.id === productid);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

module.exports = {
  getProducts,
  getProductById,
};
