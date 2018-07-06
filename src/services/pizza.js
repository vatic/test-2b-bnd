const {
    add,
    addWithIngredients,
    list,
    enable,
    disable,
} = require('../models/pizza')


const addPizza = async (name, inggredientsIds) => {
    try {
        const pizzaId = (await add(name))[0]
        try {
            const res = await addWithIngredients(pizzaId, inggredientsIds)
            return { res }
        } catch (error) {
            return { error }
        }
    } catch (error) {
        return { error }
    }
}

const getAll = async (limit, offset) => {
    try {
        const pizzasRaw = (await list(limit, offset))
        return pizzasRaw[0]
    } catch (error) {
        return { error }
    }
}

const enablePizza = async (id) => {
    try {
        const dbRes = (await enable(id))
        return dbRes
    } catch (error) {
        return { error }
    }
}

const disablePizza = async (id) => {
    try {
        const dbRes = (await disable(id))
        return dbRes
    } catch (error) {
        return { error }
    }
}

module.exports = {
    getAll,
    addPizza,
    enablePizza,
    disablePizza,
}
