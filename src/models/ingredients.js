const knex = require('../db/knex')

const tableName = 'ingredients'

const genList = (attr1, attr2) => {
    if (attr2) {
        return knex(tableName).select(attr1, attr2)
    }
    return knex(tableName).select(attr1)
}

const list = () => genList('id', 'name')
const ids = () => genList('id')
// const add = name => knex(tableName).insert({ name })

module.exports = {
    // add,
    list,
    ids,
}
