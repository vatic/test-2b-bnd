const { ids, list } = require('../models/ingredients')

const ingredientsIds = async () => {
    const rawIds = await ids()
    return rawIds.map(e => e.id)
}

const ingredientsList = async () => {
    const rawList = await list()
    return rawList
}

module.exports = {
    ingredientsIds,
    ingredientsList,
}
