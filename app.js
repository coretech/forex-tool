const app = require('express')();

require('./start/logging')();
require('./start/routes')(app);

module.exports = app;
