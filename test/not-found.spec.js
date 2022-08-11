const { expect } = require('chai');
const request = require('supertest');

const app = require('../app');

describe(
  'Test the route that does not exist',
  it(
    'Should return 404 status',
    async () => {
      const response = await request(app).get('/not-found');
      expect(response.statusCode).to.equal(404);
    },
  ),
);
