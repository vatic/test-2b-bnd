const knex = require('../db/knex')

const tableName = 'ingredients'

const list = () => {
    const SQL = `
    SELECT i.id, i.name, t.id type_id, t.name type_name
    FROM ingredients i INNER JOIN types t ON t.id=i.type_id`
    return knex(tableName).raw(SQL)
}
const ids = () => knex(tableName).select('id')
// const add = name => knex(tableName).insert({ name })

module.exports = {
    // add,
    list,
    ids,
}
