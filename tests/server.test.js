require('dotenv').config();
const request = require('supertest');
const app = require('../app');

test('Should return 200', async () => {
    await request(app).get('/').set('content-type', 'application/json').expect(200);
});
