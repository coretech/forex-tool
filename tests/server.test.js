require('dotenv').config();
const request = require('supertest');
const app = require('../app');

test('Should return 200', async () => {
    await request(app).get('/').set('content-type', 'application/json').expect(200);
});

test('Should route not found', async () => {
    await request(app)
        .get('/not-found')
        .set('content-type', 'application/json')
        .expect(404);
});

test('Should log in debug using winston', () => {
    const log = require('../config/winston');

    const testFunction = () => {
        try {
            throw new Error('This error should be logged');
        } catch (err) {
            log.error(err);
            return;
        }
    };

    const loggerSpy = jest.spyOn(log, 'error').mockReturnValue({});

    testFunction();

    expect(loggerSpy).toHaveBeenCalledTimes(1);
});

test('Should handle error', () => {
    const errorHandler = require('../middlewares/error');

    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };

    errorHandler(new Error('Handled error'), req, res, (next) => next());

    expect(res.status).toHaveBeenCalledWith(500);
});
