const {
    add,
    addWithIngredients,
    list,
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

const getAll = async () => {
    try {
        const pizzasRaw = (await list())
        return pizzasRaw[0]
    } catch (error) {
        return { error }
    }
}

module.exports = {
    getAll,
    addPizza,
}
