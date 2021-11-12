const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');

module.exports = (app) => {
    const { ENVIRONMENT } = process.env;

    app.use(cors());

    app.use(helmet());

    if (ENVIRONMENT !== 'PROD') {
        app.use(morgan('dev'));
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        return res.status(200).send(`Forex Tool in ${ENVIRONMENT}`);
    });

    app.use((req, res) => {
        return res.status(404).json({ status: false, message: 'Page not found' });
    });

    app.use(require('../middlewares/error'));
};
