const log = require('../config/winston');

module.exports = () => {
    const { DEVELOPER, ENVIRONMENT } = process.env;

    if (!DEVELOPER || !ENVIRONMENT) {
        log.error(new Error('Invalid credentials'));
        throw new Error('Invalid credentials');
    }
};
