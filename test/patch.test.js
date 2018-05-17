process.env.NODE_ENV = 'test';

const request = require('supertest-as-promised');
const assert = require('chai').assert;
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const app = require('../config/express');

describe('Json Patch', () => {
  let token = '';

  before(async () => {
    token = await jwt.sign({ username: 'dhruv' }, config.jwt.jwtSecret, { expiresIn: config.jwt.jwtDuration });
  });

  describe('POST /patch', () => {
    it('It should patch the JSON object with JSON patch object', (done) => {
      request(app)
        .post('/patch')
        .set('Authorization', `Bearer ${token}`)
        .send({
          original: {
          },
          patch: {
            op: 'add', path: '/foo', value: 'bar',
          },
        })
        .expect(200)
        .then((res) => {
          assert.typeOf(res.body, 'object');
          assert.deepEqual(res.body, { foo: "bar" });
          done();
        });
    });
  });
  describe('POST /patch', () => {
    it('It should give an error that either original or patch object is missing', (done) => {
      request(app)
        .post('/patch')
        .set('Authorization', `Bearer ${token}`)
        .send({
          original: {
          },
        })
        .expect(400)
        .then((res) => {
          assert.typeOf(res.body, 'object');
          assert.deepEqual(res.body, {
            message: "Either the original object or the patch object is null",
            error: {
                status: 400
            }
        });
          done();
        });
    });
  });
  describe('POST /patch', () => {
    it('It should give PatchConflictError ', (done) => {
      request(app)
        .post('/patch')
        .set('Authorization', `Bearer ${token}`)
        .send({
          original: {
          },
          patch: {
            op: 'remove', path: '/foo', value: 'bar',
          },
        })
        .expect(500)
        .then((res) => {
          assert.typeOf(res.body, 'object');
          assert.deepEqual(res.body, {
            message: "Value at foo does not exist",
            error: {
                message: "Value at foo does not exist",
                name: "PatchConflictError"
            }
        });
          done();
        });
    });
  });
});
