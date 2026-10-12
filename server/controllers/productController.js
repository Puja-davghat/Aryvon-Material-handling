const Product = require('../models/Product');

async function getProducts(req, res, next) {
  try {
    const { category, search } = req.query;
    const products = await Product.getAll({ categoryId: category, search });
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const product = await Product.getById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
  getProductById
};
