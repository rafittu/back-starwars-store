const ProductModel = require('../models/productsModel');

const create = async (title, price, zipcode, seller, thumbnailHd) => {
  const product = await ProductModel.create(title, price, zipcode, seller, thumbnailHd);

  if (!product) return { status: 422, message: 'Invalid data' };
  return { status: 201, product };
};

const getAll = async () => {
  const products = await ProductModel.getAll();
  return { status: 200, products };
};

module.exports = {
  create,
  getAll,
};