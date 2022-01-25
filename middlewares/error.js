const log = require('../config/winston');

module.exports = (error, req, res, next) => {
    log.error(error.message, error);

    return res.status(500).json({
        status: false,
        message: 'Somthing went wrong. Please try again later',
    });
};
