const connect = require('./connection');

const create = async (title, price, zipcode, seller, thumbnailHd) => {
  const db = await connect();
  const date = new Date(); // Formatar data para dd-mm-YYYY
  await db.collection('starwarsStore').insertOne({
    title, price, zipcode, seller, thumbnailHd, date,
  });

  return {
    title, price, zipcode, seller, thumbnailHd, date,
  };
};

module.exports = {
  create,
};