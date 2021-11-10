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

5. Para rodar os testes

```bash
$ npm run test
```
ou
```bash
$ npm run test:coverage
```

6. Para verificar a padronização

```bash
$ npm run lint
```


