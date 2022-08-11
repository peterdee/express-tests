const { expect } = require('chai');
const request = require('supertest');

const app = require('../app');

describe(
  'Test the index route',
  it(
    'Should return 200 status',
    async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).to.equal(200);

      const { body: { info, status } = {} } = response;
      expect(info).to.equal('OK');
      expect(status).to.equal(200);
    },
  ),
);
