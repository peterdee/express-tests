## express-tests

Basic API testing with [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com) for [Express](http://expressjs.com)

### Deploy

```shell script
git clone https://github.com/peterdee/express-tests
cd ./express-tests
nvm use 18
npm i
```

### Launch

```shell script
npm start
```

Server will be available at http://localhost:3000

### Testing

Tests are done with [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com)

Express application is launched for every test separately using [Supertest](https://www.npmjs.com/package/supertest)

```shell script
npm run test
```

### Linting

```shell script
npm run lint
```

Using [ESLint](https://eslint.org)

### License

[MIT](./LICENSE.md)
