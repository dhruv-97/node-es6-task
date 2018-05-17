process.env.NODE_ENV = 'test';

const request = require('supertest-as-promised');
const app = require('../config/express');

describe('Auth', () => {
  let { token, error } = '';

  describe('POST /auth', () => {
    it('It should auth the user Dhruv', (done) => {
      request(app)
        .post('/login')
        .send({
          username: 'Dhruv',
          password: '1234',
        })
        .expect(201)
        .then((res) => {
          token = res.body.token;
          done();
        });
    });
  });

  describe('POST /auth', () => {
    it('It should not authenticate this user', (done) => {
      request(app)
        .post('/login')
        .send({
          username: 'Dhruv',
        })
        .expect(401)
        .then((res) => {
          error = res.body.error;
          done();
        });
    });
  });
});
