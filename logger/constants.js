const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';

const ERROR = 'ERROR';
const INFO = 'INFO';
const LOG = 'LOG';
const SUCCESS = 'SUCCESS';
const WARNING = 'WARNING';

const DELIMITER = ':';

const LOG_TYPES = {
    ERROR: RED + ERROR,
    INFO: CYAN + INFO,
    LOG: MAGENTA + LOG,
    SUCCESS: GREEN + SUCCESS,
    WARNING: YELLOW + WARNING
};

module.exports = { DELIMITER, LOG_TYPES };