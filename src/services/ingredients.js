const { ids } = require('../models/ingredients')

const ingredientsIds = async () => {
    const rawIds = await ids()
    return rawIds.map(e => e.id)
}

module.exports = {
    ingredientsIds,
}
