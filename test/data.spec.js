const { expect } = require('chai');
const request = require('supertest');

const app = require('../app');

const VALID_DATA = {
  firstName: 'Jack',
  lastName: 'Johnson',
};

describe(
  'Test the data route',
  it(
    'Should return 200 status if data is provided',
    async () => {
      const response = await request(app).post('/data').send(VALID_DATA);
      expect(response.statusCode).to.equal(200);

      const { body: { data, info, status } = {} } = response;
      expect(data).to.equal(`${VALID_DATA.firstName} ${VALID_DATA.lastName}`);
      expect(info).to.equal('OK');
      expect(status).to.equal(200);
    },
  ),
  it(
    'Should return 400 status if firstName field is missing',
    async () => {
      const response = await request(app).post('/data').send({
        lastName: VALID_DATA.lastName,
      });
      expect(response.statusCode).to.equal(400);

      const { body: { info, status } = {} } = response;
      expect(info).to.equal('MISSING_FIRST_NAME');
      expect(status).to.equal(400);
    },
  ),
  it(
    'Should return 400 status if lastName field is missing',
    async () => {
      const response = await request(app).post('/data').send({
        firstName: VALID_DATA.firstName,
      });
      expect(response.statusCode).to.equal(400);

      const { body: { info, status } = {} } = response;
      expect(info).to.equal('MISSING_LAST_NAME');
      expect(status).to.equal(400);
    },
  ),
);
