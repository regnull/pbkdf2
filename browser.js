exports.pbkdf2 = require('./lib/async')
exports.pbkdf2Sync = require('./lib/sync')
window.pbkdf2 = exports.pbkdf2;
window.pbkdf2Sync = exports.pbkdf2Sync;
