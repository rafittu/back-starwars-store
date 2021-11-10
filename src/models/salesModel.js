const connect = require('./connection');

const create = async (itensSold) => {
  const db = await connect();
  await db.collection('sales').insertOne({ itensSold });
  return itensSold;
};

const getAll = async () => {
  const db = await connect();
  const products = await db.collection('sales').find().toArray();
  return products;
};

module.exports = {
  create,
  getAll,
};