const { DELIMITER, LOG_TYPES } = require(__dirname + '/constants');

class Logger {
    static error(message) {
        this.log(LOG_TYPES.ERROR, message);
    }

    static info(message) {
        this.log(LOG_TYPES.INFO, message);
    }

    static log(color = LOG_TYPES.LOG, message) {
        console.log(color + DELIMITER, message); // eslint-disable-line no-console
    }

    static success(message) {
        this.log(LOG_TYPES.SUCCESS, message);
    }

    static warning(message) {
        this.log(LOG_TYPES.WARNING, message);
    }
}

module.exports = { Logger };