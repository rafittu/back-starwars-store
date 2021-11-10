/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /starstore/product', () => {
  describe('quando um produto é criado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(
        URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true },
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      response = await chai.request(server)
        .post('/starstore/product')
        .send({
          title: 'Blusa do Imperio',
          price: 7990,
          zipcode: '78993-000',
          seller: 'João da Silva',
          thumbnailHd: 'https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg',
          date: '26/11/2015',
        });
    });

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "title"', () => {
      expect(response.body).to.have.property('title');
    });

    it(
      'a propriedade "title" possui o texto "Blusa do Imperio"',
      () => {
        expect(response.body.title)
          .to.be.equal('Blusa do Imperio');
      },
    );
  });
});

describe('GET /starstore/products', () => {
  describe('quando um produto é retornado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      response = await chai.request(server)
        .get('/starstore/products');
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um array', () => {
      expect(response.body).to.be.a('array');
    });
  });
});