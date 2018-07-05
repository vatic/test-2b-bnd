const knex = require('../db/knex')

const tableName = 'pizzas'
const add = name => knex(tableName).insert({ name })

const addWithIngredients = (pizzaId, ingredientsIds) => {
    const ids = ingredientsIds.map(id => `(${pizzaId}, ${id})`).join(',')
    const SQL = `INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES ${ids}`
    return knex.raw(SQL)
}

const list = async () => {
    const SQL = `
    SELECT p.id, p.name, GROUP_CONCAT(i.name SEPARATOR ', ') AS ingredients
    FROM pizzas_ingredients pi
    INNER JOIN pizzas p ON p.id = pi.pizza_id
    INNER JOIN ingredients i ON i.id = pi.ingredient_id
    GROUP BY p.id, p.name`
    const dbRes = knex.raw(SQL)
    return dbRes
}

module.exports = {
    add,
    addWithIngredients,
    list,
}
