const { loggers, format, transports } = require('winston');

const { DEVELOPER } = process.env;

const log = loggers.add('forex-tool-server', {
    format: format.combine(
        format.label({ label: `${DEVELOPER} Logger` }),
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console({
            level: 'silly',
            format: format.combine(format.colorize({ all: true }), format.simple()),
            handleExceptions: true,
        }),
        new transports.File({
            level: 'error',
            filename: `logs/${DEVELOPER}-errorfile.log`,
        }),
        new transports.File({
            level: 'info',
            filename: `logs/${DEVELOPER}-infofile.log`,
        }),
    ],
    exceptionHandlers: [
        new transports.File({
            level: 'silly',
            filename: 'logs/exceptions.log',
            handleExceptions: true,
        }),
    ],
});

module.exports = log;
