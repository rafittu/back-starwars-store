const ProductService = require('../services/productsService');

const create = async (req, res) => {
  const {
    title, price, zipcode, seller, thumbnailHd,
  } = req.body;

  const { status, message, product } = await ProductService.create(
    title,
    price,
    zipcode,
    seller,
    thumbnailHd,
  );

  if (!product) return res.status(status).json({ message });
  return res.status(status).json(product);
};

module.exports = {
  create,
};