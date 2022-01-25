const app = require('express')();

require('./start/routes')(app);

module.exports = app;
