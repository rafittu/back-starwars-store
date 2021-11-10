const SalesService = require('../services/salesService');

const create = async (req, res) => {
  const itensSold = req.body;

  const {
    status, message, sale,
  } = await SalesService.create(itensSold);

  if (!sale) return res.status(status).json({ message });
  res.status(status).json(sale);
};

const getAll = async (_req, res) => {
  const { status, products } = await SalesService.getAll();
  res.status(status).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message, sales } = await SalesService.getById(id);
  if (!sales) return res.status(status).json({ message });
  res.status(status).json(sales);
};

module.exports = {
  create,
  getAll,
  getById,
};