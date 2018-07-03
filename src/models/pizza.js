const knex = require('../db/knex')

const tableName = 'pizzas'
const add = (name, ingredientsIds) => {
    console.dir(name)
    console.log(ingredientsIds)
    return knex(tableName).insert({ name })
}

module.exports = {
    add,
}
