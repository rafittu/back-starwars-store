const SalesModel = require('../models/salesModel');

const create = async (itensSold) => {
  const sale = await SalesModel.create(itensSold);
  if (!sale) return { status: 422, message: 'Invalid data' };

  await SalesModel.createHistory(sale);

  return { status: 200, sale };
};

const getAll = async () => {
  const products = await SalesModel.getAll();
  return { status: 200, products };
};

const getById = async (id) => {
  const sales = await SalesModel.getById(id);
  return { status: 200, sales };
};

module.exports = {
  create,
  getAll,
  getById,
};