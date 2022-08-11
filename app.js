const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.get(
  '/',
  (_, response) => response.status(200).send({
    info: 'OK',
    status: 200,
  }),
);

app.post(
  '/data',
  (request, response) => {
    const { body: { firstName = '', lastName = '' } = {} } = request;
    if (!firstName) {
      return response.status(400).send({
        info: 'MISSING_FIRST_NAME',
        status: 400,
      });
    }
    if (!lastName) {
      return response.status(400).send({
        info: 'MISSING_LAST_NAME',
        status: 400,
      });
    }

    return response.status(200).send({
      data: `${firstName} ${lastName}`,
      info: 'OK',
      status: 200,
    });
  },
);

module.exports = app;
