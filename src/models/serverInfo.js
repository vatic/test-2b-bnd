const knex = require('../db/knex');

const mysqlInfo = () => knex.raw('SHOW VARIABLES LIKE "%version%"')

module.exports = {
    mysqlInfo,
}