const crypto = require('crypto');

module.exports = function generateUniqueUd(){
    return crypto.randomBytes(4).toString('HEX');
}