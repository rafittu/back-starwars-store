const SalesModel = require('../models/salesModel');

const create = async (itensSold) => {
  const sale = await SalesModel.create(itensSold);

  if (!sale) return { status: 422, message: 'Invalid data' };
  return { status: 200, sale };
};

const getAll = async () => {
  const products = await SalesModel.getAll();
  return { status: 200, products };
};

module.exports = {
  create,
  getAll,
};