# Desafio técnico ActivePay

Backend da aplicação Star Wars Store, que consiste em uma API REST a ser consumida por um aplicativo (Android e iOS).
Os itens adicionados no carrinho pelos usuários, serão transmitido para a API e será feito uma transação e-commerce.

  
## Foram utilizadas as seguintes tecnologias no projeto:

### No desenvolvimento:

- <a href="https://www.mongodb.com" rel="nofollow">MongoDB</a> - document database
- <a href="https://nodejs.org/en/download/" rel="nofollow">Node.Js</a> - the premier JavaScript web server
- Express(.js) - Node.js web framework
- <a href="https://www.npmjs.com/package/nodemon" rel="nofollow">Nodemon</a>

### Padronização e organização:

- Arquitetura em camadas (MSC)
- <a href="https://eslint.org/" rel="nofollow">ESLint</a> - airbnb style guide

### Testagem das camadas:

- <a href="https://mochajs.org/" rel="nofollow">MochaJS</a>
- <a href="https://www.chaijs.com/" rel="nofollow">ChaiJS</a>
- Mongo Memory Server


## Começando

1. Faça um <a href="https://docs.github.com/pt/get-started/quickstart/fork-a-repo" rel="nofollow">Fork</a> do repositório;

3. Instale as dependências do node e inicie o servidor

```bash
$ npm i
$ npm run dev
```

3. Inicie o mongodb no terminal

```bash
$ sudo service mongod start
```

4. Entre na pasta ./src/api/app.js e verifique as rotas disponíveis para manipular o banco, utilizando a extensão de sua preferência.

5. Método para inserir um produto novo no banco de dados

```bash
{
   "title":"Blusa do Imperio",
   "price":7990,
   "zipcode":"78993-000",
   "seller":"João da Silva",
   "thumbnailHd":"https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg",
}
```

6. Método que recebe uma nova compra junto com os dados do cliente

```bash
{
   "client_id":"7",  
   "client_name":"Luke Skywalker",
   "total_to_pay":1236,
   "credit_card":{
      "card_number":"*********1234",
      "value":7990,
      "cvv":789,
      "card_holder_name":"Luke Skywalker",
      "exp_date":"12/24"
   }
}
```

7. Para rodar os testes

```bash
$ npm run test
```
ou
```bash
$ npm run test:coverage
```

8. Para verificar a padronização

```bash
$ npm run lint
```


