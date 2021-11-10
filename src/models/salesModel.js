/* eslint-disable camelcase */
const connect = require('./connection');

const create = async (itensSold) => {
  const db = await connect();
  await db.collection('sales').insertOne({ itensSold });
  return itensSold;
};

const createHistory = async (sale) => {
  const date = new Date(); // Formatar data para dd-mm-YYYY
  const { client_id } = sale;
  const { card_number } = sale.credit_card; // Ocultar números do cartão
  const value = sale.total_to_pay;

  const db = await connect();
  await db.collection('salesHistory').insertOne({
    client_id, card_number, date, value,
  });
};

const getAll = async () => {
  const db = await connect();
  const products = await db.collection('salesHistory').find().toArray();
  return products;
};

// não está retornando as comprar do cliente, verificar.
const getById = async (id) => {
  const db = await connect();
  const sales = await db.collection('salesHistory').find({ itensSold: { $elemMatch: { client_id: id } } });

  console.log(sales);
  return sales;
};

module.exports = {
  create,
  createHistory,
  getAll,
  getById,
};