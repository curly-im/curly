const pino = require('pino');

module.exports = function createLog(options) {
    return pino(options);
};
