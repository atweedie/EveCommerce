import winston from 'winston';

const logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)({
            timestamp: function () {
                return new Date().toISOString().replace('Z', '+0000');
            }
        }),
        new winston.transports.File({ filename: 'log' })
    ]
});

export default logger;