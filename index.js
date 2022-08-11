const { Console } = require('console');

const app = require('./app');

const logger = new Console(process.stdout, process.stderr);
const PORT = Number(process.env.PORT) || 3000;

app.listen(
  PORT,
  () => logger.log('Running on port', PORT),
);
