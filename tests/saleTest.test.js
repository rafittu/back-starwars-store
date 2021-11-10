/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST SALE /starstore/buy', () => {
  describe('quando uma venda é feita com sucesso', () => {
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
        .post('/starstore/buy')
        .send({
          client_id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
          client_name: 'Luke Skywalker',
          total_to_pay: 1236,
          credit_card: {
            card_number: '1234123412341234',
            value: 7990,
            cvv: 789,
            card_holder_name: 'Luke Skywalker',
            exp_date: '12/24',
          },
        });
    });

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "client_id, total_to_pay e credit_card"', () => {
      expect(response.body).to.have.property('client_id');
      expect(response.body).to.have.property('total_to_pay');
      expect(response.body).to.have.property('credit_card');
    });

    it(
      'a propriedade "client_id" possui o ID "7e655c6e-e8e5-4349-8348-e51e0ff3072e"',
      () => {
        expect(response.body.client_id)
          .to.be.equal('7e655c6e-e8e5-4349-8348-e51e0ff3072e');
      },
    );
  });
});

describe('GET SALE /starstore/history', () => {
  describe('quando uma venda é retornada com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      response = await chai.request(server)
        .get('/starstore/history');
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