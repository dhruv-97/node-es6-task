process.env.NODE_ENV = 'test';

const request = require('supertest-as-promised');
const assert = require('chai').assert;
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const app = require('../config/express');

describe('Create Thumbnail', () => {
  let token = '';

  before(async () => {
    token = await jwt.sign({ username: 'dhruv' }, config.jwt.jwtSecret, { expiresIn: config.jwt.jwtDuration });
  });

  describe('POST /image', () => {
    it('It should download the image, resize to 50x50 pixels, and return the resulting thumbnail', (done) => {
      request(app)
        .post('/image')
        .set('Authorization', `Bearer ${token}`)
        .send({
          url: "https://cdn.pixabay.com/photo/2018/05/15/09/23/raindrop-3402550_640.jpg",
        })
        .expect(200)
        .then((res) => {
          assert.equal(res.headers['content-type'], 'image/jpeg');
          done();
        });
    });
  });
  describe('POST /image', () => {
    it('It should give an error that it is not a valid uri', (done) => {
      request(app)
        .post('/image')
        .set('Authorization', `Bearer ${token}`)
        .send({
          url: "google.com",
        })
        .expect(500)
        .then((res) => {
          assert.equal(res.body.message, 'Invalid URI \"google.com\"');
          done();
        });
    });
  });
  describe('POST /image', () => {
    it('It should give an error that thumbnail cannot be created', (done) => {
      request(app)
        .post('/image')
        .set('Authorization', `Bearer ${token}`)
        .send({
          url: "https://google.com",
        })
        .expect(500)
        .then((res) => {
          assert.equal(res.body.message, 'Input file is missing or of an unsupported image format');
          done();
        });
    });
  });
});
