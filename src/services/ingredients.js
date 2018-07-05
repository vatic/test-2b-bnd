const { ids, list } = require('../models/ingredients')

const ingredientsIds = async () => {
    const rawIds = await ids()
    return rawIds.map(e => e.id)
}

const getAll = async () => {
    const rawList = await list()
    return rawList[0]
}

module.exports = {
    ingredientsIds,
    getAll,
}
