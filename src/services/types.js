const { list } = require('../models/types')

const getAll = async () => {
    const rawList = await list()
    return rawList
}

module.exports = {
    getAll,
}
