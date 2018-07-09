const knex = require('../db/knex')

const tableName = 'pizzas'
const add = (name, user_id) => knex(tableName).insert({ name, user_id })

const addWithIngredients = (pizzaId, ingredientsIds) => {
    const ids = ingredientsIds.map(id => `(${pizzaId}, ${id})`).join(',')
    const SQL = `INSERT INTO pizzas_ingredients (pizza_id, ingredient_id) VALUES ${ids}`
    return knex.raw(SQL)
}

const listSql = userId => `
    SELECT p.id, p.name, u.id user_id, u.username, p.activity, GROUP_CONCAT(i.name SEPARATOR ', ') AS ingredients
    FROM pizzas_ingredients pi
    INNER JOIN pizzas p ON p.id = pi.pizza_id
    INNER JOIN ingredients i ON i.id = pi.ingredient_id
    INNER JOIN users u ON u.id = p.user_id
    ${userId ? 'WHERE p.user_id = ?' : ''}
    GROUP BY p.id, p.name
    ORDER BY p.updated_at DESC
    LIMIT ? OFFSET ?`

const list = (limit = 10, offset = 0) => knex.raw(listSql(null), [+limit, +offset])

const listByUser = (userId = null, limit = 10, offset = 0) => {
    if (!userId) {
        return null
    }
    return knex.raw(listSql(userId), [+userId, +limit, +offset])
}

const count = () => knex(tableName).count('id')

const countByUser = userId => knex(tableName).count('id').where({ user_id: userId })

const enable = async (id) => {
    const SQL = `
    UPDATE pizzas SET activity=1 WHERE id=${id}`
    return knex.raw(SQL)
}


const disable = async (id) => {
    const SQL = `
    UPDATE pizzas SET activity=0 WHERE id=${id}`
    return knex.raw(SQL)
}


module.exports = {
    add,
    addWithIngredients,
    list,
    listByUser,
    enable,
    disable,
    count,
    countByUser,
}
