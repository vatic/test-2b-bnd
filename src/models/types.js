const knex = require('../db/knex')

const tableName = 'types'

const list = () => knex().select('id', 'name').from(tableName)

module.exports = {
    list,
}
